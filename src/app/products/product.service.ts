import { Injectable } from '@angular/core';
import { Iproduct } from './product.interface';

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
    getProducts(): Iproduct[] {
        return [
            {
                'productId': 1,
                'productName': 'Leaf Rake',
                'productCode': 'GDN-0011',
                'releaseDate': 'March 19, 2016',
                'description': 'Leaf rake with 48-inch wooden handle.',
                'price': 19.95,
                'starRating': 3.2,
                'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
            },
            {
                'productId': 2,
                'productName': 'Garden Cart',
                'productCode': 'GDN-0023',
                'releaseDate': 'March 18, 2016',
                'description': '15 gallon capacity rolling garden cart',
                'price': 32.99,
                'starRating': 4.2,
                'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
            },
        ];
    }
}