import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import {
  ARTICLE_STORE_FEATURE_KEY,
  articlesReducer,
} from '@ncats-frontend-library/stores/article-store';
import {
  PROJECTS_FEATURE_KEY,
  projectsReducer,
} from '@ncats-frontend-library/stores/grant-store';
import {
  TRIALS_FEATURE_KEY,
  trialsReducer,
} from '@ncats-frontend-library/stores/trial-store';
import { DISEASELISTMOCK } from '../../test-setup';
import {
  DISEASES_FEATURE_KEY,
  diseasesReducer,
} from '@ncats-frontend-library/stores/disease-store';
import {
  USERS_FEATURE_KEY,
  usersReducer,
} from '@ncats-frontend-library/stores/user-store';
import { StoreModule } from '@ngrx/store';
import { DiseaseDisplayComponent } from './disease-display.component';

describe('DiseaseDisplayComponent', () => {
  let component: DiseaseDisplayComponent;
  let fixture: ComponentFixture<DiseaseDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatTabsModule,
        MatCardModule,
        MatIconModule,
        DiseaseDisplayComponent,
        StoreModule.forRoot({}),
        StoreModule.forFeature(DISEASES_FEATURE_KEY, diseasesReducer),
        StoreModule.forFeature(USERS_FEATURE_KEY, usersReducer),
        StoreModule.forFeature(ARTICLE_STORE_FEATURE_KEY, articlesReducer),
        StoreModule.forFeature(PROJECTS_FEATURE_KEY, projectsReducer),
        StoreModule.forFeature(TRIALS_FEATURE_KEY, trialsReducer),
      ],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(DiseaseDisplayComponent);
    component = fixture.componentInstance;
    const disease = signal(DISEASELISTMOCK.diseases[0]);
    fixture.componentInstance.disease =
      disease as unknown as typeof fixture.componentInstance.disease;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
