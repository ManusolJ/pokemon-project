import { Component, input, output } from '@angular/core';
import { AuthModalState } from '@interfaces/auth-modal-state.interface';

@Component({
  selector: 'app-navbar-account',
  imports: [],
  templateUrl: './navbar-account.component.html',
})
export default class NavbarAccountComponent {
  openAuthModal = output<AuthModalState>();
  isModalOpen = input();

  openRegisterModal() {
    this.openAuthModal.emit('register');
  }

  openLoginModal() {
    this.openAuthModal.emit('login');
  }
}
