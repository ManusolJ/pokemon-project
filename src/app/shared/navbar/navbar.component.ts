import { Component, signal } from '@angular/core';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { NavbarMobileMenuComponent } from './navbar-mobile-menu/navbar-mobile-menu.component';
import { NavbarLogoComponent } from './navbar-logo/navbar-logo.component';
import { NavbarAccountComponent } from './navbar-account/navbar-account.component';
import { AuthModalPageComponent } from '@auth/authModalPage/authModalPage.component';

@Component({
  selector: 'app-navbar',
  imports: [
    NavbarMenuComponent,
    NavbarLogoComponent,
    NavbarAccountComponent,
    NavbarMobileMenuComponent,
    AuthModalPageComponent,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isRegisterModal = signal(true);
  modalState = signal(false);

  openModal(isRegister: boolean) {
    this.isRegisterModal.set(isRegister);
    this.modalState.set(true);
  }

  closeModal() {
    this.modalState.set(false);
  }
}
