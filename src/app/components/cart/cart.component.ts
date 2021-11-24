import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cartItems: number = 0;
  @Output() cartEvent = new EventEmitter<number>();
  total: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  cartTotal(): number {
    return this.total = 125.00 * this.cartItems;
  }

  clearCart(): void {
    this.cartItems = 0;
    this.cartEvent.emit(this.cartItems);
    // Emit to parent when cart is clear
  }

}
