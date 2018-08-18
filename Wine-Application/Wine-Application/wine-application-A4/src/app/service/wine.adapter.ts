import { Injectable } from '../../../node_modules/@angular/core';
import { Wine } from '../models/wine.model';

@Injectable()
export class WineAdapter {
    adaptJsonToWine(wineJson: any): Wine[] {
        const wineJsonList: Wine[] = [];
        wineJson.forEach(element => {
            wineJsonList.push(new Wine(element.id, element.country, element.description, element.designation,
                element.points, element.price,
                element.province, element.region_1, element.region_2, element.variety, element.winery));
        });
        return wineJsonList;
    }
}
