import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherReportAppComponent } from './weather-report-app.component';

describe('WeatherReportAppComponent', () => {
  let component: WeatherReportAppComponent;
  let fixture: ComponentFixture<WeatherReportAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherReportAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherReportAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
