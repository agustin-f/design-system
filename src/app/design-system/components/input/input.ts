import { Component, input } from '@angular/core';

@Component({
  selector: 'ds-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  label = input<string>();

  placeholder = input<string>('');

  disabled = input(false);

  error = input<string>();
  helperText = input<string>();
}
