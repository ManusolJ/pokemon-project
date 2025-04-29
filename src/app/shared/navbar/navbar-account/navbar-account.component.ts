import { Component, output } from '@angular/core';

@Component({
  selector: 'app-navbar-account',
  imports: [],
  templateUrl: './navbar-account.component.html',
})
export class NavbarAccountComponent {
  openAuthModal = output<boolean>();
}
