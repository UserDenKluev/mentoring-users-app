import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as MaterialsActions from './materials.actions';
import * as MaterialsSelectors from './materials.selectors';

@Injectable({ providedIn: 'root' })
export class MaterialsFacade {
  private readonly store = inject(Store);

  public readonly allFolders$ = this.store.pipe(select(MaterialsSelectors.selectAllFolders))

  loadFolders() {
    this.store.dispatch(MaterialsActions.MaterialsActions.loadFolders());
  }

  addFolder(title: string) {
    this.store.dispatch(MaterialsActions.MaterialsActions.addFolder({ title }));
  }

  deleteFolder(id: number) {
    this.store.dispatch(MaterialsActions.MaterialsActions.deleteFolder({ id }));
  }
}


