import { ColorPalette } from '../models/color-palette.model';

export const COLOR_PALETTES: ColorPalette[] = [
  {
    name: 'Blue',
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
];
