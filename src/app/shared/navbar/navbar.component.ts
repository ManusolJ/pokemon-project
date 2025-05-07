import { Component, signal } from '@angular/core';
import { AuthModalPageComponent } from '@auth/authModalPage/authModalPage.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { NavbarMobileMenuComponent } from './navbar-mobile-menu/navbar-mobile-menu.component';
import { NavbarLogoComponent } from './navbar-logo/navbar-logo.component';
import { NavbarAccountComponent } from './navbar-account/navbar-account.component';

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
  isChangingModal = signal(false);
  modalState = signal(false);

  openModal(isRegister: boolean) {
    this.isRegisterModal.set(isRegister);
    this.modalState.set(true);
  }

  closeModal(isChange: boolean) {
    if (isChange) {
      this.isChangingModal.set(true);
      this.modalState.set(false);
      setTimeout(() => {
        this.isRegisterModal.update((v) => !v);
        this.modalState.set(true);
        this.isChangingModal.set(false);
      }, 550);
    } else {
      this.modalState.set(false);
    }
  }
}
