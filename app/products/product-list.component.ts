import { Component, OnInit } from '@angular/core'
import { IProduct } from './product'
import { ProductService } from "./product.service";

@Component({
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    errorMessage: string;
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false
    listFilter: string

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
                product => this.products = product,
                error => this.errorMessage = <any>error
            );
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    }

    products: IProduct[] 

    constructor(private _productService: ProductService) {

    }
}