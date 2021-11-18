import { Observable, Subscription } from 'rxjs';
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() cartSize: Observable<number>;
  @Output() toggle_sidenav = new EventEmitter<boolean>();
  eventSubscription: Subscription;
  toggle: boolean = false;
  cart: number = 0;

  ngOnInit(): void {
    this.subscribeCartSize();
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  toggleSidenav(toggle: boolean): void { 
    this.toggle_sidenav.emit(toggle);
  }

  private subscribeCartSize(): void {
    this.eventSubscription = this.cartSize.subscribe((cart: number) => {
      console.log(cart);
      this.cart = cart;
    })
  }

}
