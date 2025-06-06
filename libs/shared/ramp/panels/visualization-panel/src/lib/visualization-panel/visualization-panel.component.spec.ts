import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { VisualizationPanelComponent } from './visualization-panel.component';

describe('VisualizationPanelComponent', () => {
  let component: VisualizationPanelComponent;
  let fixture: ComponentFixture<VisualizationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizationPanelComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
