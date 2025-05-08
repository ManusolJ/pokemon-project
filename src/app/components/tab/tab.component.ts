import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import NavLink from '@interfaces/nav-link.interface';

@Component({
  selector: 'app-tab',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tab.component.html',
})
export default class TabComponent {
  tabLinkList = input.required<NavLink[]>();
}
