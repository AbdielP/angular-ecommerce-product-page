import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // cart: Array<object> = []
  cart: number = 0;

  constructor() { }

  addToCart(value: number) {
    // const product = {
    //   description: 'Fall Limited Edition Sneakers',
    //   ammount: value,
    //   price: 125.00
    // }
    // this.cart.push(product);
    // console.log(this.cart.length);
    this.cart = this.cart + value;
  }

  getCart(): number {
    // return this.cart.length;
    return this.cart;
  }

  resetCart(): void {
    this.cart = 0;
  }

}
