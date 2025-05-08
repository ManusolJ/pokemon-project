import { Component, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import type NavLink from '@interfaces/nav-link.interface';

@Component({
  selector: 'app-navbar-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-menu.component.html',
})
export default class NavbarMenuComponent {
  linkList = input.required<NavLink[]>();
  isMenuDisplayed = signal<boolean>(false);

  displayMenu() {
    this.isMenuDisplayed.update((v) => !v);
  }
}
