import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '@env/environment';

@Component({
  selector: 'app-navbar-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-menu.component.html',
})
export class NavbarMenuComponent {
  links = environment.links;
}
