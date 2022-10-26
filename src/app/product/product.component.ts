import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  // @ts-ignore
  @Input() product: Product;

  @Output() addToCartReq = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(`Init product ${this.product.id}`);
  }

  ngOnDestroy(): void {
    console.log(`Destroy product ${this.product.title}`);
  }

  public addToCart() {
    this.addToCartReq.emit(this.product.id);
  }

}
