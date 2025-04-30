import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard.component'),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component'),
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms.component'),
  },
  {
    path: 'team-builder',
    loadComponent: () =>
      import('./team/pages/builder-page/team-builder.component'),
  },
  {
    path: 'teams',
    loadComponent: () => import('./team/pages/user-team/user-team.component'),
  },
  {
    path: 'pokedex',
    loadComponent: () => import('./pages/pokedex/pokedex.component'),
  },
  {
    path: 'community',
    loadComponent: () => import('./pages/community/community.component'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
