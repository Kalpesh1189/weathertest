import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-weather-report-app',
  templateUrl: './weather-report-app.component.html',
  styleUrls: ['./weather-report-app.component.scss']
})
export class WeatherReportAppComponent implements OnInit {

  public weatherSearchApp: FormGroup;
  public weatherData: any;
  public serviceApiUrl: any;
  public geWeatherData;
  public apiURL: string;
  valSend: string;


  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.weatherSearchApp = this.formBuilder.group({
      location: ['']
    });
  }

  weatherApiCallback(val){
    this.apiURL = "http://api.openweathermap.org/data/2.5/weather?q="
    this.serviceApiUrl = `${this.apiURL}${val['location']}`;
    this.serviceApiUrl += `&appid=094aa776d64c50d5b9e9043edd4ffd00`
    this.apiService
      .getAll(this.serviceApiUrl)
      .subscribe(data => {
        this.geWeatherData = data; 
        console.log(this.geWeatherData)
        });
        (error) => {

        };
  }
}
