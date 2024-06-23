import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Folder } from './materials.reducer';

export const MaterialsActions = createActionGroup({
  source: 'Materials',
  events: {
    'Load Folders': emptyProps(),
    'Load Folders Success': props<{ folders: Folder[] }>(),
    'Load Folders Failure': props<{ error: any }>(),

    'Add Folder': props<{ title: string }>(),
    'Add Folder Success': props<{ folder: Folder }>(),
    'Add Folder Failure': props<{ error: any }>(),

    'Delete Folder': props<{ id: number }>(),
    'Delete Folder Success': props<{ id: number }>(),
    'Delete Folder Failure': props<{ error: any }>(),
  }
});
