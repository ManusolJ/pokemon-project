import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tab',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tab.component.html',
})
export class TabComponent {
  tabLinkList = input<string[]>();
}
