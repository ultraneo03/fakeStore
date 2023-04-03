import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductCart } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');

  constructor() {}

  getProducts() {
    // console.log(this.productList)
    return this.productList.asObservable();
  }
  setProduct(product: ProductCart) {
    this.cartItemList.push(product); // cu toate proprietatile
    this.productList.next(product);
  }
  addtoCart(product: ProductCart) {
    const foundIndex = this.cartItemList.findIndex(
      (x: ProductCart) => x.id == product.id
    );

    if (foundIndex !== -1) {
      this.cartItemList[foundIndex].qty += 1;
      this.cartItemList[foundIndex].total =
        this.cartItemList[foundIndex].qty * this.cartItemList[foundIndex].price;
    } else {
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
    }

    this.getTotalPrice();
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    // UPDATE la header
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
