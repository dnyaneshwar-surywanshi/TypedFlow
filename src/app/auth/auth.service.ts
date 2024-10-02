import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from './user.model';

export interface AuthResponseData {
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered?: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) { }

signup(email:string, password: string) {

 return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDihNaOhfR1Y_NhGejfFvGNGmUDgarQdws', 
  {
    email: email,
    password: password,
    returnSecureToken: true
  }).pipe(
    catchError(this.handleError),
    tap(resData => {
      this.handleAuthenticaation(
        resData.email,
        resData.localId,
        resData.idToken,
        +resData.expiresIn
      )
    })
  )
  ;

}

login(email: string, password: string) {
 return this.http.post<AuthResponseData>(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDihNaOhfR1Y_NhGejfFvGNGmUDgarQdws',
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
  ).pipe(catchError(this.handleError),
    tap(resData => {
      this.handleAuthenticaation(
        resData.email,
        resData.localId,
        resData.idToken,
        +resData.expiresIn
      )
    })
  )
}

private handleAuthenticaation(
  email: string,
  userId: string,
  token: string,
  expiresIn: number
)
{
  const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  const user = new User(email, userId, token, expirationDate);
console.log('after login user data', user)
localStorage.setItem('token', user.token);
  this.user.next(user);
}

private handleError(errorRes: HttpErrorResponse) {
  let errorMessage = ' An unkown error occured!';
  if(!errorRes.error || !errorRes.error.error) {
    return throwError(errorMessage);
  }
  switch(errorRes.error.error.message) {
    case 'EMAIL_EXISTS' :
      errorMessage = 'This eamil exists already';
      break;
    case 'EMAIL_NOT_FOUND':
      errorMessage = 'This email does not exists';
      break;
    case 'INVALID_PASSWORD': 
      errorMessage = 'This password is not correct';    
      break;
         
  }
  return throwError(errorMessage);
}
}
