import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { AuthService, OffResponseData } from './auth.service';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import{Router} from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading=false;
  error:string="";
  
 constructor(private authService:AuthService, private router:Router){}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if(!form.valid){return;}
    const email= form.value.email;
    const password= form.value.password;
    let obser:Observable<OffResponseData>;
    this.isLoading=true;
    if(this.isLoginMode){
      obser= this.authService.login(email, password);
    }
    else{
     obser= this.authService.sinup(email,password);
    }
    obser.subscribe(responseData=>{
      this.isLoading= false;
      this.router.navigate(['/app-address-book']);
      console.log(responseData);
     }, errorMessage=>{
       this.error= errorMessage;
       console.log(errorMessage);
       this.isLoading= false;
      });
    
    form.reset();
  }
}


