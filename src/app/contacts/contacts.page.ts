import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  constructor(private routeur: Router) { }

  ngOnInit() {
  }

  openProfile(id: number){
    console.log(" " + id);
    this.routeur.navigate(['profile']);
  }

}
