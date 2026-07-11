export interface SpacingToken {
  name: string;
  cssVar: string;
  value: number;
}

export const spacingTokens: SpacingToken[] = [
  {
    name: 'spacing-none',
    cssVar: 'var(--spacing-none)',
    value: 0,
  },
  {
    name: 'spacing-xs',
    cssVar: 'var(--spacing-xs)',
    value: 4,
  },
  {
    name: 'spacing-sm',
    cssVar: 'var(--spacing-sm)',
    value: 8,
  },
  {
    name: 'spacing-md',
    cssVar: 'var(--spacing-md)',
    value: 12,
  },
  {
    name: 'spacing-lg',
    cssVar: 'var(--spacing-lg)',
    value: 16,
  },
  {
    name: 'spacing-xl',
    cssVar: 'var(--spacing-xl)',
    value: 20,
  },
  {
    name: 'spacing-2xl',
    cssVar: 'var(--spacing-2xl)',
    value: 24,
  },
  {
    name: 'spacing-3xl',
    cssVar: 'var(--spacing-3xl)',
    value: 32,
  },
  {
    name: 'spacing-4xl',
    cssVar: 'var(--spacing-4xl)',
    value: 40,
  },
  {
    name: 'spacing-5xl',
    cssVar: 'var(--spacing-5xl)',
    value: 48,
  },
  {
    name: 'spacing-6xl',
    cssVar: 'var(--spacing-6xl)',
    value: 64,
  },
  {
    name: 'spacing-7xl',
    cssVar: 'var(--spacing-7xl)',
    value: 80,
  },
  {
    name: 'spacing-8xl',
    cssVar: 'var(--spacing-8xl)',
    value: 96,
  },
];
