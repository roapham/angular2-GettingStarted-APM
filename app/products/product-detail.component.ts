import { Component, OnInit } from '@angular/core'
import { IProduct } from './product'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  ngOnInit(): void {
    let id = +this._route.snapshot.params['id']
    this.pageTitle += `: ${id}`
  }

  pageTitle: string = "Product Detail";
  product: IProduct;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  onBack(): void {
    this._router.navigate(['/products'])
  }
}
