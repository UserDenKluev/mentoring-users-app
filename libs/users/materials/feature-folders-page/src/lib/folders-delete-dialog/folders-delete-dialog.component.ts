import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Folder } from '@users/materials/data-access';

@Component({
  selector: 'users-folders-delete-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './folders-delete-dialog.component.html',
  styleUrls: ['./folders-delete-dialog.component.scss']
})
export class FoldersDeleteDialogComponent {
  readonly dialogRef = inject(MatDialogRef<FoldersDeleteDialogComponent>);

  constructor(@Inject(MAT_DIALOG_DATA) public data: { folderData: Folder }) {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    console.log(123);

    this.dialogRef.close(this.data.folderData);
  }
}
