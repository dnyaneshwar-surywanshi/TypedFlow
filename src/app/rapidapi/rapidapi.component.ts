import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { RapidapiService } from '../services/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {

  constructor(private _rapidAPIService: RapidapiService, private _firebaseService: FirebaseService) { }

  ngOnInit() {
    this._rapidAPIService.getDataBBFinance().subscribe( res => {
      console.log('rapid finace data', res);
    })
  }

  CreatePost() {
    this._firebaseService.createPost().subscribe(res =>{
      console.log('firebase post', res);
    })
  }

}
