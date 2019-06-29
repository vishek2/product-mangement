import { Component, OnInit, OnDestroy } from '@angular/core';
import { Iproduct } from './product.interface';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

    pageTitle: string = 'Product List';

    imageWidth: number = 50;

    imageMargin: number = 2;

    showImage: boolean = true;

    _listFilter: string;

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: Iproduct[];

    public products: Iproduct[];

    constructor(private productService: ProductService) {

    }

    public ngOnInit(): void {
        this.productService.getProducts().subscribe( data => {
            this.products = data;
            this.filteredProducts = this.products;
        });
    }

    performFilter(filterBy: string): Iproduct[] {
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product) =>
            product.productName.toLowerCase().indexOf(filterBy) !== -1);

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onNotify(message: string): void {
        alert(message);
    }

    public ngOnDestroy(): void {

    }
}
