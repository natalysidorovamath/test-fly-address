import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ReaderDateComponent } from './reader-date/reader-date.component';
import { CurrencyListComponent } from './reader-date/currency-list/currency-list.component';
import { CurrencyDetailComponent } from './reader-date/currency-detail/currency-detail.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyItemComponent } from './reader-date/currency-list/currency-item/currency-item.component';
import { ExchangeCurrencyComponent } from './exchange-currency/exchange-currency.component';
import { AppRoutingModule } from './app-routing.module';
import { CurrencyService } from './reader-date/currency.service';
import {ExchangeCurrencyService} from './exchange-currency/exchange.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { AddressBookEditComponent } from './address-book/address-book-edit/address-book-edit.component';
import { ClientListService } from './address-book/address-list.service';



@NgModule({
  declarations: [
    AppComponent,
    ReaderDateComponent,
    CurrencyListComponent,
    CurrencyDetailComponent,
    HeaderComponent,
    CurrencyItemComponent,
    ExchangeCurrencyComponent,
    LoadingSpinnerComponent,
    AuthComponent,
    AddressBookComponent,
    AddressBookEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CurrencyService, ExchangeCurrencyService, ClientListService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}



