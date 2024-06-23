import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MaterialsActions } from './materials.actions';
import { ApiService } from '@users/core/http';
import { Folder } from './materials.reducer';

export const loadFolders = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);

    return actions$.pipe(
      ofType(MaterialsActions.loadFolders),
      switchMap(() =>
        apiService.get<Folder[]>('/folder').pipe(
          map((folders: Folder[]) => MaterialsActions.loadFoldersSuccess({ folders })),
          catchError((error) => {
            return of(MaterialsActions.loadFoldersFailure({ error }));
          })
        )
      )
    );
  }, { functional: true }
);

export const addFolder = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);

    return actions$.pipe(
      ofType(MaterialsActions.addFolder),
      switchMap((title) =>
        apiService.post<Folder, { title: string }>('/folder', title).pipe(
          map((folder: Folder) => MaterialsActions.addFolderSuccess({ folder })),
          catchError((error) => {
            return of(MaterialsActions.addFolderFailure({ error }));
          })
        )
      )
    );
  }, { functional: true }
);

export const deleteFolder = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);

    return actions$.pipe(
      ofType(MaterialsActions.deleteFolder),
      switchMap(({ id }) =>
        apiService.delete(`/folder/${id}`).pipe(
          map(() => MaterialsActions.deleteFolderSuccess({ id })),
          catchError((error) => {
            return of(MaterialsActions.deleteFolderFailure({ error }));
          })
        )
      )
    );
  }, { functional: true }
);
