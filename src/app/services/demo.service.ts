import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DemoService {

  apiURL = 'https://jsonplaceholder.typicode.com/';
  
  products = [
    {name: 'Laptop', id: '101'},
    {name: 'Mobuile', id: '102'},
    {name: 'TV', id: '103'},
  ]
  constructor(private http: HttpClient) { }

  display() {
    alert('Subscribed successfully');
  }

  calculateAge(date) {
// 
  }

  getUsersData()
  {
    let users = 'users'
   return this.http.get(this.apiURL+ users);
  }

  getDataPosts() {
    let posts = 'posts';
    return this.http.get(this.apiURL+ posts);
  }
}
