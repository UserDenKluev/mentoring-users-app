import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureMaterialsPageComponent } from './feature-materials-page.component';

describe('FeatureMaterialsPageComponent', () => {
  let component: FeatureMaterialsPageComponent;
  let fixture: ComponentFixture<FeatureMaterialsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureMaterialsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureMaterialsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
