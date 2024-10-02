import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AdduserComponent } from './adduser/adduser.component';

@Injectable({
  providedIn: 'root'
})
export class UnSavedCHnagesGuard implements CanDeactivate<AdduserComponent> {

  canDeactivate(component: AdduserComponent) {
    if(component.userName.dirty) {
      return window.confirm('You have unsaved changes. Are you sure want to navigate?');
    } else {
      return true;
    }
  }
  
}
