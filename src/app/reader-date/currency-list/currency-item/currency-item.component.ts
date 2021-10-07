import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Currency } from '../../currency.model';
import { CurrencyService } from '../../currency.service';

@Component({
  selector: 'app-currency-item',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.css']
})
export class CurrencyItemComponent implements OnInit {
  // @Input() ID: string;
  // @Output() onChanged = new EventEmitter<boolean>();


  constructor(private currencyService: CurrencyService ) { }

  ngOnInit(): void {
  }
 onSelected(){
   
  // this.onChanged.emit(true);
  

 }
//  onSubmit(){
 
//  }
 
}
