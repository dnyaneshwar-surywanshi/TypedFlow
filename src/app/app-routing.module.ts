import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { UnSavedCHnagesGuard } from './un-saved-chnages.guard';


const routes: Routes = [
  { path: '' , redirectTo: 'login', pathMatch: 'full'},  //localhost://4200/slkdjflsj
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent }, // localhost://4200
  { path:'aboutus', component: AboutusComponent} ,// localhost://4200/product
  { path:'contactus', component: ContactusComponent},
  {path: 'post', canActivate:[AuthGuard],  component: DemopostComponent},
  {path: 'postdetails/:id', component: PostdetailsComponent},
  {path: 'adduser', component: AdduserComponent, canDeactivate: [UnSavedCHnagesGuard]},
  {path: 'product', canActivate:[AuthGuard], loadChildren: './product/products.module#ProductsModule'},
  {path: 'orders', loadChildren:'./orders/orders.module#OrdersModule'},
  { path:'**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules} )],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor() {
    console.log('Routing module called');
  }
}
