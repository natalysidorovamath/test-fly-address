import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AddressBookComponent } from "./address-book/address-book.component";
import { AuthComponent } from "./auth/auth.component";
// import { ExchangeCurrencyComponent } from "./exchange-currency/exchange-currency.component";
// import { ReaderDateComponent } from "./reader-date/reader-date.component";
const appRoutes: Routes=[
    {path:'', redirectTo: '/app-auth', pathMatch: 'full'},
    {path:'app-address-book', component:AddressBookComponent},
    // {path:'currency', component:ReaderDateComponent},
    // {path:'exchange-currency', component: ExchangeCurrencyComponent},app-address-book
    {path:'app-auth', component: AuthComponent},
  ]
@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
})
export class AppRoutingModule{
 
}