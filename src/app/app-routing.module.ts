import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherReportAppComponent } from './weather-report-app/weather-report-app.component';


const routes: Routes = [
  {
    path: '',
    component: WeatherReportAppComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
