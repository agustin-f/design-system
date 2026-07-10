import { Component, signal } from '@angular/core';
import { ColorPalette } from '../../../core/models/color-palette.model';
import { ColorRowComponent } from '../../shared/color-row/color-row';

@Component({
  selector: 'app-foundations',
  imports: [ColorRowComponent],
  templateUrl: './foundations.html',
  styleUrl: './foundations.css',
})
export class Foundations {
  palettes = signal<ColorPalette[]>([
    {
      name: 'Primary',
      colors: [
        {
          token: 'color-primary-500',
          name: 'Primary 500',
          value: '#2563EB',
          cssVariable: 'var(--color-primary-500)',
        },
        {
          token: 'color-primary-600',
          name: 'Primary 600',
          value: '#1D4ED8',
          cssVariable: 'var(--color-primary-600)',
        },
      ],
    },
  ]);
}
