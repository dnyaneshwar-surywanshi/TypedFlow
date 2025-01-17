import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoading = false;
  isLoginMode = true;
  error: string = null;
  constructor(private authService: AuthService, private router: Router, private firebaseService: FirebaseService) { }

  ngOnInit() {

  

    // this.firebaseService.getPostDataFirebase().subscribe(res=> {
    //   console.log('get FirebaseService', res);
    // })
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){

    if(!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    let authObs : Observable<AuthResponseData>;

   this.isLoading = true;

    if(this.isLoginMode)
    {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }
 
    authObs.subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
      this.router.navigate(['./aboutus']);
    }, 
    errorMessage => {
      this.error = errorMessage;
      this.isLoading = false;
    }
    )



  }
}
