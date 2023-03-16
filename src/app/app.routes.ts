import { Routes } from '@angular/router';



export const routes: Routes = [

  {
    path: 'splash',
    loadComponent: () => import('./pages/splash/splash.page').then(m => m.SplashPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: '',
    loadChildren: () => import('./pages/navigations/tabs/tabs.routes').then(m => m.routes)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
];

