import { Component, input } from '@angular/core';
import { DocsNavItem } from '../docs-nav-item/docs-nav-item';

interface NavItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-docs-sidebar',
  imports: [DocsNavItem],
  templateUrl: './docs-sidebar.html',
  styleUrl: './docs-sidebar.css',
})
export class DocsSidebar {
  open = input(false);

  items: NavItem[] = [
    {
      label: 'Foundations',
      route: '/foundations',
    },
    {
      label: 'Components',
      route: '/components',
    },
  ];
}
