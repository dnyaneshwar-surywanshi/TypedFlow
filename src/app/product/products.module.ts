import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TabletComponent } from './tablet/tablet.component';
import { TvComponent } from './tv/tv.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import {  RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { CustdirDirective } from '../custdir.directive';
import { UtilityModule } from '../models/utility.module';

const prodRoutes : Routes = [
  { path:'', component: ProductComponent,  children: [ // localhost:4200/product/tv
    { path: 'laptop', component: LaptopComponent},
    { path: 'tablet', component: TabletComponent},
    { path: 'tv', component: TvComponent},
    { path: 'washingmachine', component: WashingmachineComponent}

  ] }, // localhost:4200/product
]

@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
    TabletComponent,
    TvComponent,
    WashingmachineComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),
    UtilityModule
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsModule { 
  constructor() {
    console.log('Product module called');
  }
}
