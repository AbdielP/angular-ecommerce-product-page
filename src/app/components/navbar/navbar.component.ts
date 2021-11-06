import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() toggle_sidenav = new EventEmitter<boolean>();
  toggle: boolean = false;

  toggleSidenav(toggle: boolean): void { 
    this.toggle_sidenav.emit(toggle);
  }

}
