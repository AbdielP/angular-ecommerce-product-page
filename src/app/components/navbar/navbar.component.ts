import { Observable, Subscription } from 'rxjs';
import { Component, Output, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { CartComponent } from './../cart/cart.component';
import {MatDialog} from '@angular/material/dialog';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  @Input() cartSize: Observable<number>;
  @Output() toggle_sidenav = new EventEmitter<boolean>();
  eventSubscription: Subscription;
  toggle: boolean = false;
  cart: number = 0;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.subscribeCartSize();
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  toggleSidenav(toggle: boolean): void { 
    this.toggle_sidenav.emit(toggle);
  }

  openDialog(): void {
    // console.log('Em... dude?')
    // const dialogRef = this.dialog.open(CartComponent, {restoreFocus: false});
    // dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }

  private subscribeCartSize(): void {
    this.eventSubscription = this.cartSize.subscribe((cart: number) => {
      console.log(cart);
      this.cart = cart;
    })
  }

}
