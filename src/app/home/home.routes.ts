import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/home-layout/home-layout.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/dashboard/dashboard.component'),
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component'),
      },
    ],
  },
];

export default routes;
