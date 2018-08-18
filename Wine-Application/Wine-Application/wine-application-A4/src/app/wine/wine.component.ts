import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Wine } from '../models/wine.model';
import { WineService } from '../service/wine.service';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Subscription } from '../../../node_modules/rxjs';
import { WineFilter } from '../service/wine.filter.model';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css']
})
export class WineComponent implements OnInit, OnDestroy {

  wineList: any[];
  subscriptions: Subscription[] = [];
  criteria: WineFilter = { countryFilter: null, provinceFilter: null, regionFilter: null };
  constructor(
    private wineService: WineService
  ) { }

  ngOnInit() {
    const getWinesSubscription = this.wineService.getAllWines().subscribe(result => {
      this.wineList = result;
    });
    this.subscriptions.push(getWinesSubscription);
  }
  wineByProvince($event) {
    this.criteria = Object.assign({}, this.criteria, { provinceFilter: $event.currentTarget.value });
  }
  wineByCountry($event) {
    this.criteria = Object.assign({}, this.criteria, { countryFilter: $event.currentTarget.value });
  }
  wineByRegion($event) {
    this.criteria = Object.assign({}, this.criteria, { regionFilter: $event.currentTarget.value });
  }
  ngOnDestroy() {
    this.subscriptions.forEach(el => el.unsubscribe());
  }
}
