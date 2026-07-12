import { Routes } from '@angular/router';
import { DocsLayout } from './docs/layouts/docs-layout/docs-layout';
import { Home } from './docs/pages/home/home';
import { Foundations } from './docs/pages/foundations/foundations';
import { Components } from './docs/pages/components/components';
import { Playground } from './docs/pages/playground/playground';

export const routes: Routes = [
  {
    path: '',
    component: DocsLayout,
    children: [
      {
        path: '',
        redirectTo: 'foundations',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'foundations',
        component: Foundations,
      },
      {
        path: 'components',
        component: Components,
      },
      {
        path: 'playground',
        component: Playground,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
