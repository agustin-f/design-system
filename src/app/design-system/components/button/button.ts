import { Component, input } from '@angular/core';
import { ButtonVariant, ButtonSize } from '../../../core/models/button.types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ds-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  variant = input<ButtonVariant>('primary');

  size = input<ButtonSize>('md');

  disabled = input(false);
}
