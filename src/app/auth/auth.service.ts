import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from "./user.model";
export interface OffResponseData{
    idToken:string,
    email:string,
    refreshToken:string,
    expiresIn:string,
    localId:string,
    registered?:boolean
}
@Injectable({
providedIn:'root'
})
export class AuthService{
   
    user= new Subject<User>();
    constructor(private http:HttpClient){

    }
    sinup(email:string, password:string){
      return  this.http.post<OffResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC3YFh9zvcWCP5_rp_6MTg4O5OE6rJPXkg', {
         email:email,
         password:password,
         returnSecureToken:true
     }).pipe(catchError(this.handleError),tap(
       resDate=>{
      this.handleAutintification(resDate.email, resDate.localId,resDate.idToken, +resDate.expiresIn);
     }))
    }
    login(email:string, password:string){
    return  this.http.post<OffResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC3YFh9zvcWCP5_rp_6MTg4O5OE6rJPXkg',{
        email:email,
        password:password,
        returnSecureToken:true
      }).pipe(catchError(this.handleError),tap(
        resDate=>{
       this.handleAutintification(resDate.email, resDate.localId,resDate.idToken, +resDate.expiresIn);
      }))
    }
    private handleAutintification(email:string,userId:string, token:string, expireIn:number){
      const expirationDate=new Date(new Date().getDate()+ expireIn*1000);
      const user= new User(email, userId, token, expirationDate);
      this.user.next(user);
    }
    private handleError(errorResponse:HttpErrorResponse){
        let errorMessage='Unknown error occurred!' ;
        if(!errorResponse.error || !errorResponse.error.error){
         return throwError(errorMessage);
        }
        switch(errorResponse.error.error.message)
        {
          case 'EMAIL_EXISTS':
            errorMessage="This email exists!";
            break;
           case 'EMAIL_NOT_FOUND':
           errorMessage="нет пользовательской записи, соответствующей этому идентификатору. Возможно, пользователь был удален.";
           break;
           case 'INVALID_PASSWORD':
            errorMessage="пароль недействителен или у пользователя нет пароля";
            break;
            case 'USER_DISABLED':
                errorMessage="учетная запись пользователя отключена администратором.";   
                break;
        }
        return throwError(errorMessage);
      
    }
}