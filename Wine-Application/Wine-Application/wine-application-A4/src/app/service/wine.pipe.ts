import { Pipe, PipeTransform } from '../../../node_modules/@angular/core';
import { WineFilter } from './wine.filter.model';
import { Wine } from '../models/wine.model';

@Pipe({ name: 'wineFilter' })
export class WinePipe implements PipeTransform {
    transform(data: Wine[], args: WineFilter): any {
        if (data) {
            const countryData = this.filterWinesByCountry(data, args.countryFilter);
            const provinceData = this.filterWinesByProvince(countryData, args.provinceFilter);
            const regionData = this.filterWinesByRegion(provinceData, args.regionFilter);
            return regionData;
        }
        return data;
    }

    filterWinesByCountry(data: Wine[], countryFilter: string) {
        if (countryFilter) {
            return data.filter(x => x.country.toLocaleLowerCase().indexOf(countryFilter.toLocaleLowerCase()) !== -1);
        }
        return data;
    }

    filterWinesByProvince(data: Wine[], provinceFilter: string) {
        if (provinceFilter) {
            return data.filter(x => x.province.toLocaleLowerCase().indexOf(provinceFilter.toLocaleLowerCase()) !== -1);
        } return data;
    }

    filterWinesByRegion(data: Wine[], regionFilter: string) {
        if (regionFilter) {
            return data.filter(x => x.region_1.toLocaleLowerCase().indexOf(regionFilter.toLocaleLowerCase()) !== -1 ||
                x.region_2.toLocaleLowerCase().indexOf(regionFilter.toLocaleLowerCase()) !== -1);
        } return data;
    }
}
