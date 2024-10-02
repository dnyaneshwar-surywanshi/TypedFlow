import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirassign',
  templateUrl: './dirassign.component.html',
  styleUrls: ['./dirassign.component.css']
})
export class DirassignComponent implements OnInit {
showSecret = false;
log = [];
  constructor() { }

  ngOnInit() {
  }
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1) ;
  }
}
