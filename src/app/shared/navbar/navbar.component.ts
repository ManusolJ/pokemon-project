import { Component, computed, inject } from '@angular/core';

import type NavLink from '@interfaces/nav-link.interface';
import type { AuthModalState } from '@interfaces/auth-modal-state.interface';

import NavbarMenuComponent from './navbar-menu/navbar-menu.component';
import NavbarLogoComponent from './navbar-logo/navbar-logo.component';
import NavbarAccountComponent from './navbar-account/navbar-account.component';
import { ModalService } from '@services/modal.service';

@Component({
  selector: 'app-navbar',
  imports: [NavbarMenuComponent, NavbarLogoComponent, NavbarAccountComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  modalService = inject(ModalService);
  isModalOpen = computed(() => this.modalService.authModalState() !== 'closed');

  navLinks: NavLink[] = [
    {
      path: '/team-builder',
      name: 'Team Builder',
    },
    {
      path: '/teams',
      name: 'Teams',
    },
    {
      path: '/pokedex',
      name: 'Pokedex',
    },
    {
      path: '/community',
      name: 'Community',
    },
  ];

  modifyModalState(authModalType: AuthModalState) {
    this.modalService.modifyAuthModal(authModalType);
  }
}
