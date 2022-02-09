import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IcartViewModel, IProduct } from '../viewModel/store-data';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  httpOption;
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // ,Authorization: 'my-auth-token'
      })
    };
  }
  private handleError(error: HttpErrorResponse) {
    // Generic Error handler
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Write error details in Generic error log

    // Return an observable with a user-facing error message.
    return throwError(
      ()=>new Error('Error occured, please try again')
    )
  }





  //category
getCatgeory(){
  return this.httpClient.get<IProduct[]>(`${environment.ApiUrl}/categories`)
}

//producrs 
  getAllProducts(): Observable<IProduct[]> {

    return this.httpClient.get<IProduct[]>(`${environment.ApiUrl}/products`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getProductsByCatID(catID: number): Observable<IProduct[]> {
    if(catID==0){
      return this.httpClient.get<IProduct[]>(`${environment.ApiUrl}/products`)
    }else{
      return this.httpClient.get<IProduct[]>(`${environment.ApiUrl}/products?categoryId=${catID}`)
    }
    
    
  }


  getProductByID(prdID: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${environment.ApiUrl}/products/${prdID}`)
    
  }

  addProduct(newPrd: IProduct): Observable<IProduct> {
   
    return this.httpClient
    .post<IProduct>(`${environment.ApiUrl}/products`, JSON.stringify(newPrd), this.httpOption)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );

  }

  updateProduct(prdID: number, UpdatedPrd: IProduct) {
    return this.httpClient
    .patch<IProduct>(`${environment.ApiUrl}/products/${prdID}`,UpdatedPrd)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );

  }

  deleteProduct(prdID: number) {

    return this.httpClient
    .delete<IProduct>(`${environment.ApiUrl}/products/${prdID}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );

  }

 

 //cart

  fillCart(): Observable<IcartViewModel[]> {

    return this.httpClient.get<IcartViewModel[]>(`${environment.ApiUrl}/cart`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }


  addToCart(newPrd: IProduct): Observable<IProduct> {
   
    return this.httpClient
    .post<IProduct>(`${environment.ApiUrl}/cart`, newPrd)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );

  }
  deleteFromCart(prdID: number) {

    return this.httpClient
    .delete<IcartViewModel>(`${environment.ApiUrl}/cart/${prdID}`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );

  }

 




















}
