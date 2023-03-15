import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('../tab-home/tabHome.page').then(m => m.TabHome)
      },
      {
        path: 'calender',
        loadComponent: () => import('../tab-calender/tabCalender.page').then(m => m.tabCalender)
      },
      {
        path: 'my',
        loadComponent: () => import('../tab-my/tabMy.page').then(m => m.TabMy)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];
