import { Routes } from '@angular/router';

const teamRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/planner-layout/planner-layout.component'),
    loadChildren: () => [
      {
        path: '',
        redirectTo: 'builder',
        pathMatch: 'full',
      },
      {
        path: 'builder',
        loadComponent: () =>
          import('./pages/builder-page/builder-page.component'),
      },
      {
        path: 'analisis',
        loadComponent: () =>
          import('./pages/analisis-page/analisis-page.component'),
      },
      {
        path: '**',
        redirectTo: 'builder',
      },
    ],
  },
];

export default teamRoutes;
