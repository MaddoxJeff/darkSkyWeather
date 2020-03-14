import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { locationView } from 'src/app/models/location.model';
import { Subscription } from 'rxjs';
import { darkSky, weatherDataDaily } from 'src/app/models/weather.model';
import { locationService } from 'src/app/services/apis/location.service';
import { weatherService } from 'src/app/services/apis/weather.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Time } from '@angular/common';
import * as moment from 'moment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  zipCode: number;
  latitude: number;
  longtiude: number;
  tinySpace: string = ' ';
  public locationView: locationView;
  public DarkSky: darkSky;
  //public day1: weatherDataDaily;
  public subscriptions = new Subscription();

  constructor(
    private LocationService: locationService,
    private WeatherService: weatherService,


  ) { }



  ngOnInit() {
    this.subscriptions.add(
      this.WeatherService.GetWeatherByCoordinates(29.7604, -95.3698).subscribe((DarkSky: darkSky) => {
         this.DarkSky = DarkSky;
       })
    )
  }

  epochToDate(date: number) {
    moment.unix(date).toString();
    
  }


  //onZipEnter() {
    
    //this.subscriptions.add(
     // this.LocationService.getCoordinatesByZip(this.zipCode).subscribe((locationView: locationView) => {
      //  this.locationView = locationView;
      //  this.latitude = this.locationView.lat;
       // this.longtiude = this.locationView.lng;
       // this.WeatherService.GetWeatherByCoordinates(this.latitude, this.longtiude).subscribe((DarkSky: darkSky) => {
         // this.DarkSky = DarkSky;
        //})
      //})
    //)
  //}

  

}
