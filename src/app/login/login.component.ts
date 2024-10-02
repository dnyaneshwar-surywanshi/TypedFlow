import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route: Router, private _authService: AuthService) { }

  ngOnInit() {
  }

  checkuser(uname, password) 
  {

   var output = this._authService.checkUserNameandPassword(uname, password);

   if(output == true) {
    window.alert('Login succesfully');
    this._route.navigate(['product']);
   } else {
    window.alert('Invalid username and password');
   }
    // if(uname== 'admin' && password == 'admin') 
    // {
    //   this._route.navigate(['product/laptop']);
    // }
  }
}



