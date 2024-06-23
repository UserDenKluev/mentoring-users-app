import { createFeature, createReducer, on } from '@ngrx/store';
import { MaterialsActions } from './materials.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const materialsFeatureKey = 'materials';

export interface Folder {
  id: number,
  created_at: number,
  title: string,
}

export interface FolderState extends EntityState<Folder> {
  error: any;
}

export const folderAdapter: EntityAdapter<Folder> = createEntityAdapter<Folder>();

export const initialFolderState: FolderState = folderAdapter.getInitialState({
  error: null
});

export const foldersFeature = createFeature({
    name: materialsFeatureKey,
    reducer: createReducer(
      initialFolderState,
      on(MaterialsActions.loadFoldersSuccess, (state: FolderState, { folders }) =>
        folderAdapter.setAll(folders, state)
      ),
      on(MaterialsActions.addFolderSuccess, (state: FolderState, { folder }) =>
        folderAdapter.addOne(folder, state)
      ),
      on(MaterialsActions.deleteFolderSuccess, (state: FolderState, { id }) =>
        folderAdapter.removeOne(id, state)
      )
    )
  }
);
