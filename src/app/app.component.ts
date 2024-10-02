import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { Product } from './models/product';
import { DemoService } from './services/demo.service';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {
 
  constructor(private _demoService: DemoService, private _postsService: PostService) {
   
    
  }
  ngOnInit(): void {

    // this._demoService.getUsersData().subscribe(data => {
    //   console.log('AppComponent', data)
    // })

    // this._demoService.getDataPosts().subscribe(results => {
    //   console.log('posts', results);
    // })
  }


  data : string = 'red';
  name: string;
  price: number = 9000;
  product: Product = new Product();
  public uid: number;
  title = 'ANgular Batch 4';
  uname = 'I am from app component';
 
  EmployeeRecords: any = [
    {
      eName:'Dnyanesh', eCity:'pune', eSalary:'200000'
    },
    {
      eName:'Sumit', eCity:'nagpur', eSalary:'150000'
    }
  ] 

  foods: string[] = [];

 appchildExist: boolean = true;

 destroy() {
  this.appchildExist = false;
 }


  getDataFromChild(value) {
    console.log(value);
    this.foods.push(value);
  }
  handleData(value) {
    this.data = value.target.value;
  }
  updateProduct() {
    //this.product = new Product();
    this.product.name = this.name;
    this.product.price = this.price;
  }

  // DeletePost() {
  //   this._postsService.deletePostById(1).subscribe( res => {
  //     console.log(res);
  //   })
  // }
}

//Pipe : Pipe is useful for trnsform data from one format to another format 

// built in pipe . 
// Title, Uppecase, Date, Currency 