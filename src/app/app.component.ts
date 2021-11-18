import { Subject } from 'rxjs';
import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() callLightbox: boolean = true;

  title = 'angular-ecommerce-product-page';
  toggle_sidenav: boolean = false;
  eventCart: Subject<number> = new Subject<number>();

  toggleSidenav(toggle: boolean): void {
    this.toggle_sidenav = toggle;
  }

  // Receive cart lenght from 'description' component
  cartLenght(cart: number) : void {
    // Emit cart to 'navbar' component
    this.eventCart.next(cart);
  }

}
