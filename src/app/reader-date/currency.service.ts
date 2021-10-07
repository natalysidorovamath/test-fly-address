

import { Subject } from 'rxjs';
import { Currency } from "./currency.model";


export class CurrencyService{
    currencySelected = new Subject<Currency[]>();
    private currencies: Currency[]=[];
    constructor(){}
    
      getCurrency(){
          if(this.currencies){
            return this.currencies;
          }
        return [];
      }
      setCurrency(currency:Currency[]){
       this.currencies = currency;
      /// this.currencySelected.next(this.currencies.slice());
      
      }
      updateCurrency(index: number, newRecipe: Currency) {
        this.currencies[index] = newRecipe;
        this.currencySelected.next(this.currencies.slice());
      }
      
}