import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ecommerce-product-page';
  toggle_sidenav: boolean = false;

  toggleSidenav(toggle: boolean): void {
    this.toggle_sidenav = toggle;
  }

}
