import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  // constructor base Dependancy Injection
  constructor(private _firebaseService: FirebaseService, private authService: AuthService) { }

  ngOnInit() {

    
     this._firebaseService.getPostDataFirebase().subscribe(res => {
      console.log('getting data after login', res)
     })
  }

}
