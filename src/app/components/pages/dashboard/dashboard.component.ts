import { Component, OnInit } from '@angular/core';
import { locationView } from 'src/app/models/location.model';
import { Subscription } from 'rxjs';
import { darkSky } from 'src/app/models/weather.model';
import { locationService } from 'src/app/services/apis/location.service';
import { weatherService } from 'src/app/services/apis/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  zipCode: number;
  latitude: number;
  longtiude: number;
  public locationView: locationView;
  public DarkSky: darkSky;
  public subscriptions = new Subscription();
  
  constructor() { }

  ngOnInit() {
  }

}
