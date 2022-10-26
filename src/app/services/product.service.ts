import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public fetchProducts() {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products', {
      params: {
        limit: 9,
        sort: 'desc'
      }
    });
  }
}
