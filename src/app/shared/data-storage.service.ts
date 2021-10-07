import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Currency } from "../reader-date/currency.model";
import { CurrencyService } from "../reader-date/currency.service";
import { map , tap} from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class DataStorageSevice{
 constructor(private http: HttpClient,
    private currencyService: CurrencyService){
}
//currencies:Currency[];
 getCurrencies(){
 
  return this.http
          .get<Currency[]>(
            'https://www.cbr-xml-daily.ru/daily_json.js'
          )
          .pipe(
            map(currencies => {
              return currencies;
              }))
            
          .subscribe(currencies=>{
           // this.setCurrency(currencies);
              this.currencyService.setCurrency( currencies);
          })
        
 }
 setCurrency(currency:Currency[]){
    this.currencyService.setCurrency(currency);
    //console.log(currency);
   }
//    get Currency(){
//       // console.log(this.currencies);
//    return this.currencies;
//    }
}