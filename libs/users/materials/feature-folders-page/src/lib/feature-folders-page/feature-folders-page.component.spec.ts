import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureFoldersPageComponent } from './feature-folders-page.component';

describe('FeatureFoldersPageComponent', () => {
  let component: FeatureFoldersPageComponent;
  let fixture: ComponentFixture<FeatureFoldersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureFoldersPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureFoldersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
