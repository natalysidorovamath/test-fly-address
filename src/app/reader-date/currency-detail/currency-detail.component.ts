import { Component, OnInit, Input } from '@angular/core';
import { INITIAL_STATE } from '@ngrx/store';
import { Currency } from '../currency.model';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.css']
})
export class CurrencyDetailComponent implements OnInit {
  @Input() chooseCurrency: Currency[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initialState();
  }

  initialState() {
    let ob = localStorage.getItem('chooseCurrency');
    if (ob) {
      this.chooseCurrency = JSON.parse(ob);
      console.log(this.chooseCurrency);
    
    }
  }



}
