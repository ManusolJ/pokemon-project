import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabComponent } from '@components/tab/tab.component';

@Component({
  selector: 'app-team-layout',
  imports: [TabComponent, RouterOutlet],
  templateUrl: './team-layout.component.html',
})
export default class TeamLayoutComponent {
  routes = ['builder', 'analisis'];
}
