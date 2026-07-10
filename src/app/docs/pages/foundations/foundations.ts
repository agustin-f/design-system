import { Component, signal } from '@angular/core';
import { ColorPalette } from '../../../core/models/color-palette.model';
import { ColorRowComponent } from '../../shared/color-row/color-row';
import { TokenGroup } from '../../shared/token-group/token-group';
import { Button } from '../../../design-system/components/button/button';

@Component({
  selector: 'app-foundations',
  imports: [ColorRowComponent, TokenGroup, Button],
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
    {
      name: 'Neutral',
      colors: [
        {
          token: 'color-neutral-100',
          name: 'Neutral 100',
          value: '#F5F5F5',
          cssVariable: 'var(--color-neutral-100)',
        },
        {
          token: 'color-neutral-900',
          name: 'Neutral 900',
          value: '#171717',
          cssVariable: 'var(--color-neutral-900)',
        },
      ],
    },
  ]);
  semanticColors = signal<ColorPalette[]>([
    {
      name: 'Actions',
      colors: [
        {
          token: 'color-action-primary',
          name: 'Action Primary',
          value: '#2563EB',
          cssVariable: 'var(--color-action-primary)',
        },
        {
          token: 'color-action-primary-hover',
          name: 'Action Primary Hover',
          value: '#1D4ED8',
          cssVariable: 'var(--color-action-primary-hover)',
        },
      ],
    },
    {
      name: 'Text',
      colors: [
        {
          token: 'color-text-primary',
          name: 'Text Primary',
          value: '#171717',
          cssVariable: 'var(--color-text-primary)',
        },
      ],
    },
    {
      name: 'Background',
      colors: [
        {
          token: 'color-background-default',
          name: 'Background Default',
          value: '#FFFFFF',
          cssVariable: 'var(--color-background-default)',
        },
      ],
    },
  ]);
}
