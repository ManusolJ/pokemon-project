import { Component } from '@angular/core';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { NavbarLogoComponent } from './navbar-logo/navbar-logo.component';
import { NavbarAccountComponent } from './navbar-account/navbar-account.component';
import { NavbarMobileMenuComponent } from './navbar-mobile-menu/navbar-mobile-menu.component';

@Component({
  selector: 'app-navbar',
  imports: [
    NavbarMenuComponent,
    NavbarLogoComponent,
    NavbarAccountComponent,
    NavbarMobileMenuComponent,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {}
