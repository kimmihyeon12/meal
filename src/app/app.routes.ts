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
    path: 'navs',
    loadChildren: () => import('./pages/navs/navs.routes').then(m => m.routes)
  },
  {
    path: 'profile-update',
    loadComponent: () => import('./pages/modal/profile-update/profileUpdate.page').then(m => m.ProfileUpdatePage)
  },
  {
    path: 'board-add',
    loadComponent: () => import('./pages/modal/board-add/boardAdd.page').then(m => m.BoardAddPage)
  },
  {
    path: '',
    redirectTo: 'navs',
    pathMatch: 'full'
  },
];

