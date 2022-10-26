import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // @ts-ignore
  @Input() product: Product;

  @Output() addToCartReq = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public addToCart() {
    this.addToCartReq.emit(this.product.id);
  }

}
