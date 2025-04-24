import { Component, signal } from '@angular/core';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { NavbarLogoComponent } from './navbar-logo/navbar-logo.component';
import { NavbarAccountComponent } from './navbar-account/navbar-account.component';
import { NavbarMobileMenuComponent } from './navbar-mobile-menu/navbar-mobile-menu.component';
import { LoginPageComponent } from '../../core/auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from '../../core/auth/pages/register-page/register-page.component';

@Component({
  selector: 'app-navbar',
  imports: [
    NavbarMenuComponent,
    NavbarLogoComponent,
    NavbarAccountComponent,
    NavbarMobileMenuComponent,
    LoginPageComponent,
    RegisterPageComponent,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  showLogin = signal<boolean>(false);

  openLogin() {
    this.showLogin.set(true);
  }

  closeLogin() {
    this.showLogin.set(false);
  }
}
