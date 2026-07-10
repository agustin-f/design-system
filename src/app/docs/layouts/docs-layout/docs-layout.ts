import { Component, signal } from '@angular/core';
import { DocsHeader } from '../../navigation/docs-header/docs-header';
import { DocsSidebar } from '../../navigation/docs-sidebar/docs-sidebar';
import { RouterOutlet } from '@angular/router';
import { DocsNavItem } from '../../navigation/docs-nav-item/docs-nav-item';

@Component({
  selector: 'app-docs-layout',
  imports: [DocsHeader, DocsSidebar, RouterOutlet, DocsNavItem],
  templateUrl: './docs-layout.html',
  styleUrl: './docs-layout.css',
})
export class DocsLayout {
  sidebarOpen = signal(false);

  toggleSidebar() {
    this.sidebarOpen.update((value) => !value);
  }
}
