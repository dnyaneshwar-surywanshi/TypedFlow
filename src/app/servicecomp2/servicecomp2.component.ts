import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecomp2',
  templateUrl: './servicecomp2.component.html',
  styleUrls: ['./servicecomp2.component.css']
})
export class Servicecomp2Component implements OnInit {

  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    this._demoService.getUsersData().subscribe(data => {
      console.log('Servicecomp2Component', data);
    })
  }

  OnSubscribe()
  {
    
    this._demoService.display();
  }

}
