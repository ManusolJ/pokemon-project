import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'team-builder',
    pathMatch: 'full',
  },
  {
    path: 'team-builder',
    loadChildren: () => import('./team-planner/team.routes'),
  },
  {
    path: 'teams',
    loadComponent: () => import('./pages/user-team/user-team.component'),
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
    path: 'about',
    loadComponent: () => import('./pages/about/about.component'),
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms.component'),
  },
  {
    path: '**',
    redirectTo: 'team-builder',
  },
];
