import { Component, input } from '@angular/core';
import { DocsNavItem } from '../docs-nav-item/docs-nav-item';

@Component({
  selector: 'app-docs-sidebar',
  imports: [],
  templateUrl: './docs-sidebar.html',
  styleUrl: './docs-sidebar.css',
})
export class DocsSidebar {
  open = input(false);
}
