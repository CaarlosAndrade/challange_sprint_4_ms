import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Email } from './../model/email';
import { Produto } from 'src/app/model/produto';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'http://localhost:8080/email';

  httpsOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  constructor(private _http : HttpClient) { }

  getEmails(): Observable<Email[]>{
    return this._http.get<Email[]>(this.apiUrl)
      .pipe(tap(console.log)) as Observable<Email[]>;
  }

  getByDate(data: string): Observable<Email[]>{
    return this._http.get<Email[]>(this.apiUrl+ "/"+ data)
      .pipe(tap(console.log)) as Observable<Email[]>;
  }

}
