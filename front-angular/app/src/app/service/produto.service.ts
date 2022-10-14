import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})


export class ProdutoService {

  private apiUrl = 'http://localhost:3001/products';

  httpsOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private _http : HttpClient) { }

  getProdutos(): Observable<Produto[]>{
    return this._http.get<Produto[]>(this.apiUrl, this.httpsOptions)
      .pipe(tap(console.log)) as Observable<Produto[]>;
  }

  postProduto(produto: Produto) {
    console.log('post', produto)
    return this._http.post(
      'http://localhost:3001/products',
      produto,
      {responseType: 'text'}).subscribe((data)=> {console.log(data
        )})
  }
}
