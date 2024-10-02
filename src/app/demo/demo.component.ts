import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  //@Input() myinputMsg: string;
  @Input() employee: any;
  @Output() foodevent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    console.log('from parent', this.employee);
  }

  // fucntion will call once user enter text box value 
  addtofood(value) {
    debugger;
// foodevent is nothing but your custom event (foodevent)
    this.foodevent.emit(value);
  }
}
