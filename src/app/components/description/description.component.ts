import { Component, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

  counter: number = 0;
  @Output() cart = new EventEmitter<number>();

  constructor(private cartService: CartService) { }

  increaseCounter(): void {
    this.counter++;
  }

  decreaseCounter(): void {
    if (this.counter > 0) this.counter--;
  }

  addToCart(): void {
    if (this.counter > 0) {
      this.cartService.addToCart(this.counter);
      this.cart.emit(this.cartService.getCart());
      this.counter = 0;
    } 
  }

}
