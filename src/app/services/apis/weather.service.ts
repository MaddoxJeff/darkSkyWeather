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

    //GetWeatherByCoordinates()
}