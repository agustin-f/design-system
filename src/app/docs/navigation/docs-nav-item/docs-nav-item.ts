import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-docs-nav-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './docs-nav-item.html',
  styleUrl: './docs-nav-item.css',
})
export class DocsNavItem {
  label = input.required<string>();

  route = input.required<string>();
}
