import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { $ } from 'protractor';
import { Login } from '../models/results';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 username: string;
 password: string;
 UsersData: any;
 
 constructor(public apiService: DataService,private router: Router) {
   this.UsersData = [];
 }

 ngOnInit() {
   this.getAllUsers();
 }

 getAllUsers() {
   //Get saved list of students
   this.apiService.getList().subscribe(response => {
     console.log(response);
     this.UsersData = response;
   })
 }

  // fonction se connecter
  login() { 
    let trouve : boolean = false;
    this.UsersData.forEach(user => {
      if (user['login']['username'] === this.username && user['login']['password'] === this.password ){
        trouve = true ;  
        this.router.navigate(['/liste-users']);
      } 
    });
    if (trouve === false ) {
      this.username = '';
      this.password = '';
      document.getElementById('lab').innerText = 'Authentification échouée';
      this.router.navigate(['/']);
    }
  }

}
