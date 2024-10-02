import {  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input() userid: number;
  @Input() parentData: string;
  @Input() product: Product;
  @ContentChild("child", {static: false}) contentChild: ElementRef;
 
  @ViewChild("childhook", {static: true}) viewChild: ElementRef;
pi;

counter;
num:number = 1;

  constructor() {
    this.pi = 3.14;
    console.log(" constructor called");
   }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    clearInterval(this.counter);
  }
 
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called')
    this.viewChild.nativeElement.setAttribute('style',  `color:${this.parentData}`);
  }
  ngAfterViewInit(): void {
   //console.log('ngAfterViewInit called', this.viewChild);
   //this.viewChild.nativeElement.setAttribute('style',  `color:${this.parentData}`);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
   // this.contentChild.nativeElement.setAttribute('style', `color:${this.parentData}`);
  }
  ngDoCheck(): void {
    console.log(' ngDoCheck called');
  }
  ngAfterContentInit(): void {
    console.log(' ngAfterContentInit called', this.contentChild);
    console.log('view int access', this.viewChild);
   // this.contentChild.nativeElement.setAttribute('style', 'color:green');

   //this.contentChild.nativeElement.setAttribute('style', `color:${this.parentData}`);

  }
  
  ngOnChanges(changes: SimpleChanges): void {

    console.log(" ngOnChanges called");
    //console.log(this.parentData);
    // for (const propname in changes) {
    //   const prop = changes[propname];

    //   const {previousValue, currentValue, firstChange} = prop;

    //   console.log(`Prop name ${propname}`);
    //   console.log(`Prev  value ${previousValue}`);
    //   console.log(`Current value ${currentValue}`);
    //   console.log(`First change ${firstChange}`);
    //   console.log("---------------")

    // }
    
  }

   // hooks 
  ngOnInit() {
    console.log("ngOnInit called")

    this.counter = setInterval(() => {
      this.num = this.num + 1 ;
      console.log(this.num);
      // api 
    }, 1000)

   
  }

}
