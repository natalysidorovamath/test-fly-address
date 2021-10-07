import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Currency } from '../reader-date/currency.model';

@Component({
  selector: 'app-exchange-currency',
  templateUrl: './exchange-currency.component.html',
  styleUrls: ['./exchange-currency.component.css']
})
export class ExchangeCurrencyComponent implements OnInit {

  constructor(private http: HttpClient) { }
  currencies: Currency[] = [];
  ngOnInit(): void {
    this.initialization();
  }
  getCurrencies(): Observable<Currency[]> {
    return this.http
      .get<Currency[]>(
        'https://www.cbr-xml-daily.ru/daily_json.js'
      )
  }
  initialization() {
    this.getCurrencies().subscribe((data: any) => {
      let result = data["Valute"];
      let listPropertyNames = Object.keys(result);
      let array = Array.from(listPropertyNames);
      for (let ob of array) {
        let curr = (result[ob] as Currency);
        this.currencies.push(new Currency(curr.CharCode, curr.ID, curr.Name, curr.Nominal, curr.NumCode, curr.Value, false));
      }
    })
  }
  onChangeCurrency(){
    
  }

}
