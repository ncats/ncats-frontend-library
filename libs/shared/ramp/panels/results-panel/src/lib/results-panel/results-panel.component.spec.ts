import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ResultsPanelComponent } from './results-panel.component';

describe('ResultsPanelComponent', () => {
  let component: ResultsPanelComponent;
  let fixture: ComponentFixture<ResultsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsPanelComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
