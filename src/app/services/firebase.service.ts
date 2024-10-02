import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { FireBasePost } from '../models/firebasepost';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


 url = 'https://angcrud-d7237-default-rtdb.firebaseio.com/';
  constructor(private _httpClient:HttpClient, private authService: AuthService) { }

  users: any[] = [
    {id: '101', name: 'Dnynaesh', gender: 'Male'},
    {id: '102', name: 'Jack', gender: 'Male'},
    {id: '103', name: 'Harmayni', gender: 'Female'}
  ] 
  createPost()
  {
    let postData = {
      title : 'This is angular 8 crud',
      content: 'This is firebase crud operation with post'
    }

  return  this._httpClient.post(this.url + 'posts.json', postData);
  }

  createPostDataReactiveForm(fireBasePost: FireBasePost) {
    
    return  this._httpClient.post(this.url + 'posts.json', fireBasePost);
  }

  getPostDataFirebase() {
  // return this.authService.user.pipe(take(1), exhaustMap(user => {
  //   console.log('token', user.token);
  //   return this._httpClient.get(this.url+ 'posts.json?auth='+ user.token);
  //  }));

  return this._httpClient.get(this.url + 'posts.json');

  
 
  // before httpInterceptor code is below 
  // return this.authService.user.pipe(take(1), exhaustMap( user => {
  //   console.log('token', user.token)
  //   return this._httpClient.get(this.url + 'posts.json', {
  //     params: new HttpParams().set('auth', user.token)
  //   });
  // }));
  }
}
