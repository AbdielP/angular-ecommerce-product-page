import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cartItems: number = 0;
  total: number;

  constructor() { }

  ngOnInit(): void {
  }

  cartTotal(): number {
    return this.total = 125.00 * this.cartItems;
  }

  clearCart(): void {
    this.cartItems = 0;
    // Emit to parent when cart is clear
    // Menu should keep showing itself when click inside it.
  }

}
