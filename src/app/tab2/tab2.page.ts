import { Component } from '@angular/core';
import { log } from 'util';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  postList = [];
  route : Router;
  constructor(private posts: DataService) {
    this.posts.getPosts().subscribe(
       data => {
         // let data = JSON.stringify(response);
        // console.log(data) ; 
        this.postList = Object.values(data);
        console.log(this.postList);
       }
     );
  }
 /* openDetail(id: number) {
    console.log(" " + id);
    this.route.navigate(['post-detail', id]);
  } */
}
