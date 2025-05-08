import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import TabComponent from '@components/tab/tab.component';
import NavLink from '@interfaces/nav-link.interface';

@Component({
  selector: 'app-planner-layout',
  imports: [RouterOutlet, TabComponent],
  templateUrl: './planner-layout.component.html',
})
export default class PlannerLayoutComponent {
  tabLinks: NavLink[] = [
    {
      path: 'builder',
      name: 'Team Planner',
    },
    {
      path: 'analisis',
      name: 'Team Analysis',
    },
  ];
}
