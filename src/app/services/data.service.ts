import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private link = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {
  }

  getPosts() {
   return  this.http.get(this.link);
  }

}
