import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  userName;
  constructor(private _utilityService: UtilityService) {
    this._utilityService.userName.subscribe(res =>{
      this.userName = res;
    })
   }

  ngOnInit() {
  }
  updateUserName(uname) {
    let emp = {

      name: 'Codemind',
      id: '103'
    }
    // next method is used to send message to an observable i.e username
    this._utilityService.userName.next(JSON.stringify(emp));
  }
}
