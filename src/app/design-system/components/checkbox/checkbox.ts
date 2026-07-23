import { Component, input } from '@angular/core';

@Component({
  selector: 'ds-checkbox',
  imports: [],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css',
})
export class Checkbox {
  label = input<string>('');

  checked = input(false);

  disabled = input(false);
}
