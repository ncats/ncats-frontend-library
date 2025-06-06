import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  DISEASES_FEATURE_KEY,
  diseasesReducer,
} from '@ncats-frontend-library/stores/disease-store';
import {
  USERS_FEATURE_KEY,
  usersReducer,
} from '@ncats-frontend-library/stores/user-store';
import { StoreModule } from '@ngrx/store';
import { PhenotypeListComponent } from './phenotype-list.component';

describe('PhenotypeListComponent', () => {
  let component: PhenotypeListComponent;
  let fixture: ComponentFixture<PhenotypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PhenotypeListComponent,
        StoreModule.forRoot({}),
        StoreModule.forFeature(DISEASES_FEATURE_KEY, diseasesReducer),
        StoreModule.forFeature(USERS_FEATURE_KEY, usersReducer),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PhenotypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
