import { Component } from '@angular/core';
import { TabComponent } from '../../../components/tab/tab.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-team-layout',
  imports: [TabComponent, RouterOutlet],
  templateUrl: './team-layout.component.html',
})
export default class TeamLayoutComponent {
  routes = ['builder', 'stats'];
}
