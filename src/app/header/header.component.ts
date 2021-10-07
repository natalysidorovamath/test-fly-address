import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
//import * as fromApp from '../store/reader.reducer';

import { Subscription } from 'rxjs';
import { DataStorageSevice } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

//import * as RecipeActions from '../reader-date';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
  
  private userSub: Subscription;
  isAuthentificated= false;
  constructor(private dataStorage: DataStorageSevice, private authService:AuthService){}
   
  ngOnInit() {
    this.userSub=this.authService.user.subscribe(user=>{
      this.isAuthentificated=!!user;;
    });
  }
  onGetDate(){
  this.dataStorage.getCurrencies();
  }
 
  onSaveData() {
    
  }

  onFetchData() {
 
  }

 

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}///chapter 20 lesson 16
//chapter 22 13
