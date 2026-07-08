import { Component } from '@angular/core';
import { DocsHeader } from '../../navigation/docs-header/docs-header';
import { DocsSidebar } from '../../navigation/docs-sidebar/docs-sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-docs-layout',
  imports: [DocsHeader, DocsSidebar, RouterOutlet],
  templateUrl: './docs-layout.html',
  styleUrl: './docs-layout.css',
})
export class DocsLayout {}
