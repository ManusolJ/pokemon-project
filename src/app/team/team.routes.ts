import { Routes } from '@angular/router';

const teamRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/team-layout/team-layout.component'),
    loadChildren: () => [
      {
        path: '',
        loadComponent: () =>
          import('./pages/builder-page/builder-page.component'),
      },
      {
        path: 'builder',
        loadComponent: () =>
          import('./pages/builder-page/builder-page.component'),
      },
      {
        path: 'stats',
        loadComponent: () => import('./pages/stats-page/stats-page.component'),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

export default teamRoutes;
