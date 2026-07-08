import { Component } from '@angular/core';
import { DocsNavItem } from '../docs-nav-item/docs-nav-item';

@Component({
  selector: 'app-docs-sidebar',
  imports: [DocsNavItem],
  templateUrl: './docs-sidebar.html',
  styleUrl: './docs-sidebar.css',
})
export class DocsSidebar {}
