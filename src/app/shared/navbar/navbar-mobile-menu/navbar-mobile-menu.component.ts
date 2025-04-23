import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '@env/environment';

@Component({
  selector: 'app-navbar-mobile-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-mobile-menu.component.html',
})
export class NavbarMobileMenuComponent {
  links = environment.links;

  isMenuDisplayed = signal<boolean>(false);

  displayMenu() {
    this.isMenuDisplayed.update((v) => !v);
  }
}
