// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Services
import { UtilityService } from 'src/app/services/static/utility.service';

// Models
import { darkSky } from 'src/app/models/weather.model';

@Injectable()
export class weatherService {
    constructor(
        private http: HttpClient
    ) { }

    GetWeatherByCoordinates(latitude: number, longitude: number): Observable<darkSky> {
        const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/37a66de95c083bf850d6c997a34191aa/' + latitude + ',' + longitude;
        //const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/37a66de95c083bf850d6c997a34191aa/29.750262,-95.615197';
        return this.http.get<darkSky>(url).pipe(
            map(UtilityService.extractData)
        );
    }
}