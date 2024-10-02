import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  arrEmp : any [] = [{id:'101', name:'Dnyanesh'},
                     {id:'102', name:'Surya'}
]
 
}
