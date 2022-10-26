import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../model/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public products: Product[] = [];
  public product: any;
  public displayThirdColumn = true;

  constructor(private httpClient: HttpClient) {
    this.fetchProducts();
  }

  public toggleThirdColumn() {
    this.displayThirdColumn = !this.displayThirdColumn;
  }

  public fetchProducts() {
    this.httpClient.get<Product[]>('https://fakestoreapi.com/products')
      .subscribe((res: Product[]) => {
        this.products = res.slice(0, 6);
        this.product = this.products[0];
      });
  }

  public addProductToCart(productId: string) {
    window.alert(`Product ${productId} has been added to cart`);
  }
}
