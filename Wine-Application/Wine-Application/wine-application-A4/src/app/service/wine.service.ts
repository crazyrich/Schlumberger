import { Injectable } from '../../../node_modules/@angular/core';
import { Observable } from '../../../node_modules/rxjs/Rx';
import { Wine } from '../models/wine.model';
import { HttpClient } from '@angular/common/http';
import { WineAdapter } from './wine.adapter';
import { map } from '../../../node_modules/rxjs/operators';

@Injectable()
export class WineService {
    constructor(
        private httpClient: HttpClient,
        private wineAdapter: WineAdapter
    ) { }

    getAllWines(): Observable<any[]> {
        return this.httpClient.get<Wine[]>('http://localhost:50750/api/wines')
            .pipe(map(result => {
                return this.wineAdapter.adaptJsonToWine(result);
            })
            );

    }
}
