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
 trouve;
 
 constructor(public apiService: DataService,private router: Router) {
   this.UsersData = [];
   this.trouve = false;
 }

 ngOnInit() {
  
 }

 findUser() {
   /* Get saved list of users */
     this.apiService.getList().subscribe(response => {
     this.UsersData = response;
   });
   // Verify user connected
     this.UsersData.forEach(user => {
    if (user.login.username === this.username && user.login.password === this.password ){
         this.trouve = true ;  
         this.router.navigate(['/liste-users']);
    }
  });
     if (this.trouve === false ) {
          this.username = '';
          this.password = '';
          document.getElementById('lab').innerText = 'Authentification échouée';
    }
 }
}
