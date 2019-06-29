import { Injectable } from '@angular/core';
import { Iproduct } from './product.interface';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

/*  * provided in is added in angular 6

    * Earlier we used to put service name in providers array in
      app.module.ts
      Providers :[ProductService] // synatx is still valid

    * if we want the service to be added in component and its child
      only, we can use the providers array in @component decorator.
*/

export class ProductService {
    private url = 'api/products/products.json';

    constructor(private httpClient: HttpClient) {

    }
    public getProducts(): Observable<Iproduct[]> {
        return this.httpClient.get<Iproduct[]>(this.url);
    }
}
