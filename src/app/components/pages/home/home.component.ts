import { Component, OnInit, ModuleWithComponentFactories, ViewChild, OnDestroy } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { locationView } from 'src/app/models/location.model';
import { Subscription, forkJoin, observable } from 'rxjs';
import { darkSky, weatherDataDaily } from 'src/app/models/weather.model';
import { locationService } from 'src/app/services/apis/location.service';
import { weatherService } from 'src/app/services/apis/weather.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Time } from '@angular/common';
import * as moment from 'moment';
import { DialogNavComponent } from 'src/app/dialog-nav/dialog-nav.component';
//import { ZipcodeDialogueComponent } from 'src/app/components/modals/zipcode-dialogue/zipcode-dialogue.component';
import { zip, delay } from 'rxjs/operators';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  //@ViewChild(DialogNavComponent, {static: true}) child: DialogNavComponent;

  modalClosed: boolean = false;
  zipCode: number;
  latitude: number;
  longtiude: number;
  tinySpace: string = ' ';
  public locationView: locationView;
  public DarkSky: darkSky;
  public newZip: number;
  //public day1: weatherDataDaily;
  public subscriptions = new Subscription();

  constructor(
    private LocationService: locationService,
    private WeatherService: weatherService,
    public dialog: MatDialog,


  ) { }



  ngOnInit() {




    this.updateZipCode();


  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  async updateZipCode() {
    const modal = this.dialog.open(DialogNavComponent, {
      width: '400px',
      data: {
        modalTitle: 'Enter Zipcode'
      }
      
    });

    const UpdateZip = modal.afterClosed().subscribe(async payload => {
      let newZipcode: number = payload;

      const location = await this.LocationService.getCoordinatesByZip(payload).toPromise();



      this.subscriptions.add(
         this.WeatherService.GetWeatherByCoordinates(location.lat, location.lng).subscribe((DarkSky: darkSky) => {
          this.DarkSky = DarkSky;
          this.locationView = location;
        })
      )

    })
    this.modalClosed = true;
  }



}
