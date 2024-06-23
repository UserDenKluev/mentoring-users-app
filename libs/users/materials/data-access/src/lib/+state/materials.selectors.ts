import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMaterials from './materials.reducer';
import { folderAdapter, FolderState } from './materials.reducer';

export const selectMaterialsState = createFeatureSelector<FolderState>(fromMaterials.materialsFeatureKey);

export const { selectAll } = folderAdapter.getSelectors();

export const selectAllFolders = createSelector(selectMaterialsState, (state) => selectAll(state))
