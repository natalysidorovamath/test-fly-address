import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataStorageSevice } from 'src/app/shared/data-storage.service';
import { Currency } from '../currency.model';
import { CurrencyService } from '../currency.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {
  @Output()
  onChanged = new EventEmitter<Currency[]>();
  currencies: Currency[] = [];
chooseCurrency: Currency[] = [];

  constructor(private currencyService: CurrencyService, private http: HttpClient,
    private dataStorage: DataStorageSevice) { }

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
  onToggle(){
    const checkedOptions = this.currencies.filter(x => x.checked);
    this.chooseCurrency= checkedOptions;
    localStorage.setItem('chooseCurrency',JSON.stringify(this.chooseCurrency));
    this.onChanged.emit(this.chooseCurrency);
  }

}




