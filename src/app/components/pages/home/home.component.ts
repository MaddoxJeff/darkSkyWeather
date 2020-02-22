import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { locationView } from 'src/app/models/location.model';
import { Subscription } from 'rxjs';
import { darkSky } from 'src/app/models/weather.model';
import { locationService } from 'src/app/services/apis/location.service';
import { weatherService } from 'src/app/services/apis/weather.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


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
  public locationView: locationView;
  public DarkSky: darkSky;


  public subscriptions = new Subscription();

  constructor(
    private LocationService: locationService,
    private WeatherService: weatherService,


  ) { }



  ngOnInit() {



  }

  onZipEnter() {
    
    this.subscriptions.add(
      this.LocationService.getCoordinatesByZip(this.zipCode).subscribe((locationView: locationView) => {
        this.locationView = locationView;
        this.latitude = this.locationView.lat;
        this.longtiude = this.locationView.lng;
        console.log(this.latitude);
        
      })
    )
    


    this.subscriptions.add(
      this.WeatherService.GetWeatherByCoordinates(this.latitude, this.longtiude).subscribe((DarkSky: darkSky) => {
        this.DarkSky = DarkSky;
      })
    )
  }

  

}
