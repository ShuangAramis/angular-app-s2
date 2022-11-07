import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];
  public product: any;
  public displayThirdColumn = true;
  public serviceError = false;

  constructor(private productService: ProductService) {}

  public ngOnInit(): void {
    this.fetchProducts();
  }

  public toggleThirdColumn() {
    this.displayThirdColumn = !this.displayThirdColumn;
  }

  public fetchProducts() {
    this.productService.fetchProducts()
      .subscribe({
        next: (res: Product[]) => {
          this.products = res.slice(0, 6);
          this.product = this.products[0];
        },
        error: (error) => {
          console.log(error);
          this.serviceError = true;
        }
      });
  }

  public addProductToCart(productId: string) {
    window.alert(`Product ${productId} has been added to cart`);
  }

  public deleteProduct(productIdx: number) {
    this.products.splice(productIdx, 1);
  }
}
