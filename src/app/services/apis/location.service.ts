// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Services
import { UtilityService } from 'src/app/services/static/utility.service';

// Models
import { locationView } from 'src/app/models/location.model';

@Injectable()
export class locationService {
    constructor(
        private http: HttpClient
    ) { }

    getCoordinatesByZip(zipCode: number): Observable<locationView> {
        const url = 'https://www.zipcodeapi.com/rest/js-8f8VadZdBlWEP9AV5xqPFPjJxLyXrHLogQWN7A1V0gqeemM2XiOkl8WkAC1YMK26/info.json/' + zipCode + '/degrees';
        return this.http.get<locationView>(url).pipe(
            map(UtilityService.extractData)
        );
    }


}