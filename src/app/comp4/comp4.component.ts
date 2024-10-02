import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
  userName;
  constructor(private _utilityService: UtilityService) { 
    this._utilityService.userName.subscribe(res => {
      this.userName = res;
    })
  }

  ngOnInit() {
  }
  updateUserName(uname) {
    let emp = {

      name: 'Jack',
      id: '104'
    }
    // next method is used to send message to an observable i.e username
    this._utilityService.userName.next(JSON.stringify(emp));
  }
}
