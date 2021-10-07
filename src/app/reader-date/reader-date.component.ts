import { Component, OnInit } from '@angular/core';
import { Currency } from './currency.model';
import { CurrencyService } from './currency.service';




@Component({
  selector: 'app-reader-date',
  templateUrl: './reader-date.component.html',
  styleUrls: ['./reader-date.component.css'],
  providers:[CurrencyService]
})
export class ReaderDateComponent implements OnInit {
  constructor(){}
  selectedCurrency: Currency[]=[];

ngOnInit() {
  
  
  }
  onChanged(increased:any){
    this.selectedCurrency=increased;
   // console.log(this.selectedCurrency);
   // increased==true?this.clicks++:this.clicks--;
}
}
