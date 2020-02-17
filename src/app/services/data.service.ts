import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Result} from '../models/results';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private link = 'http://localhost:3000/results';

  constructor(private http: HttpClient) {
  }

  getUsers() {
   return  this.http.get(this.link);
  }
   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  // Getusers data
  getList(): Observable<Result> {
    return this.http
      .get<Result>(this.link)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

   // Get single user data by ID
   getItem(id): Observable<Result> {
    return this.http
      .get<Result>(this.link + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
