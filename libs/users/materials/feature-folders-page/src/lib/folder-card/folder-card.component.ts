import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Folder } from '@users/materials/data-access';

@Component({
  selector: 'users-folder-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, DatePipe],
  templateUrl: './folder-card.component.html',
  styleUrls: ['./folder-card.component.scss']
})
export class FolderCardComponent {
  @Input({ required: true }) dataFolder!: Folder;
  @Output() deleteFolder = new EventEmitter<Folder>();

  public isVisible = false;

  mouseenter() {
    this.isVisible = true;
  }

  mouseleave() {
    this.isVisible = false;
  }

  transformMillisecondsInDate(milliseconds: number) {
    return new Date(milliseconds);
  }
}
