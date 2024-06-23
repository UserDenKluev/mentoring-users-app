import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'users-feature-materials-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-materials-page.component.html',
  styleUrls: ['./feature-materials-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureMaterialsPageComponent {}
