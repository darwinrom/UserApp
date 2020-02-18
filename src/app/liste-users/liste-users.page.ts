import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.page.html',
  styleUrls: ['./liste-users.page.scss'],
})
export class ListeUsersPage implements OnInit {

  UsersData: any;
 
  constructor(public apiService: DataService,private nav: NavController) {
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
    });
  }
  openDetails(id) {
    this.nav.navigateRoot('user-detail/' + id );
  }
   
}
