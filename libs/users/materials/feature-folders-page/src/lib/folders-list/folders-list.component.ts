import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FolderCardComponent } from '../folder-card/folder-card.component';
import { Folder } from '@users/materials/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'users-folders-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule, FolderCardComponent],
  templateUrl: './folders-list.component.html',
  styleUrls: ['./folders-list.component.scss']
})
export class FoldersListComponent {
  @Input({ required: true }) allFolders$!: Observable<Folder[]>;
  @Output() deleteFolder = new EventEmitter<Folder>();
}
