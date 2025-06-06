import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SunburstChartComponent } from './sunburst-chart.component';

describe('SunburstChartComponent', () => {
  let component: SunburstChartComponent;
  let fixture: ComponentFixture<SunburstChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunburstChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SunburstChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
