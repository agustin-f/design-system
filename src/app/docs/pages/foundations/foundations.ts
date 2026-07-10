import { Component, signal } from '@angular/core';
import { ColorPalette } from '../../../core/models/color-palette.model';
import { ColorRowComponent } from '../../shared/color-row/color-row';
import { TokenGroup } from '../../shared/token-group/token-group';
import { Button } from '../../../design-system/components/button/button';
import { PRIMITIVE_COLORS } from '../../../../styles/tokens/primitive-colors';

@Component({
  selector: 'app-foundations',
  imports: [ColorRowComponent, TokenGroup, Button],
  templateUrl: './foundations.html',
  styleUrl: './foundations.css',
})
export class Foundations {
  palettes = signal(PRIMITIVE_COLORS);
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
