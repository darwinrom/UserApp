import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.page.html',
  styleUrls: ['./liste-users.page.scss'],
})
export class ListeUsersPage implements OnInit {

  UsersData: any;
 
  constructor(public apiService: DataService,private router: Router) {
    this.UsersData = [];
  }
 
  ngOnInit() {
    this.getAllUsers();
  }
 
  getAllUsers() {
    // Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.UsersData = response;
    })
  }
   
}
