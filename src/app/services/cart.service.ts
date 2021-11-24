import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: number = 0;

  constructor() { }

  addToCart(value: number) {
    this.cart = this.cart + value;
  }

  getCart(): number {
    return this.cart;
  }

  resetCart(): void {
    this.cart = 0;
  }

}
