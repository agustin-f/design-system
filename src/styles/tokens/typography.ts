export interface TypographyToken {
  name: string;
  size: string;
  lineHeight: string;
  weight: string;
}

export const typographyTokens: TypographyToken[] = [
  {
    name: 'Display',
    size: 'var(--font-size-5xl)',
    lineHeight: 'var(--line-height-4xl)',
    weight: '700',
  },
  {
    name: 'Heading H1',
    size: 'var(--font-size-4xl)',
    lineHeight: '44px',
    weight: '700',
  },
  {
    name: 'Heading H2',
    size: 'var(--font-size-3xl)',
    lineHeight: '40px',
    weight: '700',
  },
  {
    name: 'Heading H3',
    size: 'var(--font-size-2xl)',
    lineHeight: '32px',
    weight: '600',
  },
  {
    name: 'Heading H4',
    size: 'var(--font-size-xl)',
    lineHeight: '28px',
    weight: '600',
  },
  {
    name: 'Body',
    size: 'var(--font-size-md)',
    lineHeight: '24px',
    weight: '400',
  },
];
