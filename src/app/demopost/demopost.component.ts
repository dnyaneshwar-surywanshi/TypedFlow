import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {

  arrPosts: Post[] = [];

  constructor(private _postService: PostService) { }

  ngOnInit() {
    // this._postService.getPosts().subscribe(res => { 
    //   this.arrPosts = res;
    //   //console.log(',sjhsklhslkhslk', this.arrPosts);
    // })
  }

}
