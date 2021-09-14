import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { Product } from './product.model';
import {map, catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = 'http://localhost:3001/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, '', {
      duration:4000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: isError ? ["msg-error"] : ['msg-success']

    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product).pipe(
      map(obj=> obj),catchError(err =>this.errorHandler(err))
      )
  }

  

  read(): Observable<Product []> {
    return this.http.get<Product []>(this.baseURL).pipe(
      map(obj=> obj),catchError(err =>this.errorHandler(err))
      )
  }

  readById( id: string | null): Observable<Product>{
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Product>(url).pipe(
      map(obj=> obj),catchError(err =>this.errorHandler(err))
      );
  }

  update(product:Product): Observable<Product>{
    const url = `${this.baseURL}/${product.id}`;
    return this.http.put<Product>(url,product).pipe(
      map(obj=> obj),catchError(err =>this.errorHandler(err))
      );
  }

  delete(id: string): Observable<Product>{
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map(obj=> obj),catchError(err =>this.errorHandler(err))
      );
  }

  errorHandler(err: any): Observable<any>{
    this.showMessage('Occured an Error ', true);
    return EMPTY
  }
}
