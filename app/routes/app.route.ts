import { Routes } from '@angular/router';

import { LoginRoutes } from './login.route';
import { HomeRoutes } from './home.route';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  ...LoginRoutes,
  ...HomeRoutes
];
