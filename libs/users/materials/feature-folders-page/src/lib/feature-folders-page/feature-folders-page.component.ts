import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoldersListComponent } from '../folders-list/folders-list.component';
import { Folder, MaterialsFacade } from '@users/materials/data-access';
import { MatDialog } from '@angular/material/dialog';
import { FoldersAddDialogComponent } from '../folders-add-dialog/folders-add-dialog.component';
import { FoldersAddButtonComponent } from '../folders-add-button/folders-add-button.component';
import { FoldersDeleteDialogComponent } from '../folders-delete-dialog/folders-delete-dialog.component';

@Component({
  selector: 'users-feature-folders-page',
  standalone: true,
  imports: [CommonModule, FoldersListComponent, FoldersAddButtonComponent],
  templateUrl: './feature-folders-page.component.html',
  styleUrls: ['./feature-folders-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureFoldersPageComponent implements OnInit {
  private readonly materialsFacade = inject(MaterialsFacade);
  private readonly dialog = inject(MatDialog);

  public readonly allFolders$ = this.materialsFacade.allFolders$;

  ngOnInit() {
    this.materialsFacade.loadFolders();
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(FoldersAddDialogComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe((title) => {
      if (title !== undefined) {
        this.materialsFacade.addFolder(title);
      }
    });
  }

  openDeleteFolder(folderData: Folder): void {
    const dialogRef = this.dialog.open(FoldersDeleteDialogComponent, {
      data: { folderData }
    });

    dialogRef.afterClosed().subscribe((folderData: Folder) => {
      if (folderData !== undefined) {
        this.materialsFacade.deleteFolder(folderData.id);
      }
    });

  }

}
