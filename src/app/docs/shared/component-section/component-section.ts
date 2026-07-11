import { Component, input } from '@angular/core';

@Component({
  selector: 'app-component-section',
  imports: [],
  templateUrl: './component-section.html',
  styleUrl: './component-section.css',
})
export class ComponentSection {
  title = input.required<string>();

  description = input<string>();
}
