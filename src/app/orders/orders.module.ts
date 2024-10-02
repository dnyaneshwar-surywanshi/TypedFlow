import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { CustdirDirective } from '../custdir.directive';



@NgModule({
  declarations: [OrderlistComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { 
  constructor() {
    console.log('OrdersModule loaded');
  }
}
