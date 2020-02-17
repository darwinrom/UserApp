import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from '../models/results';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {

  id: number;
  data: Result;
  gender: string;
  firstname;
  lastname;
  email: string;
  phone: string;
  cell: string;
  picture;
  nat: string;
 
  constructor( public activatedRoute: ActivatedRoute,public router: Router,
    public apiService: DataService
  ) {
  }
 
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    // get item details using id
    this.apiService.getItem(this.id).subscribe(response => {
      //console.log(response);
      this.data = response;
      console.log(this.data);
      this.gender=this.data.gender;
      this.firstname=this.data.name.first;
      this.lastname=this.data.name.last;
      this.email= this.data.email;
      this.phone=this.data.phone;
      this.cell=this.data.cell;
      this.picture=this.data.picture.large;
      this.nat=this.data.nat;
      this.id=this.data.id;
    })
  }
}
