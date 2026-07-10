import { ColorPalette } from '../../app/core/models/color-palette.model';

export const SEMANTIC_COLORS: ColorPalette[] = [
  {
    name: 'Text',
    colors: [
      {
        token: 'color-text-primary',
        name: 'Text Primary',
        value: 'Gray 900',
        cssVariable: 'var(--color-text-primary)',
      },
      {
        token: 'color-text-secondary',
        name: 'Text Secondary',
        value: 'Gray 600',
        cssVariable: 'var(--color-text-secondary)',
      },
      {
        token: 'color-text-tertiary',
        name: 'Text Tertiary',
        value: 'Gray 500',
        cssVariable: 'var(--color-text-tertiary)',
      },
      {
        token: 'color-text-disabled',
        name: 'Text Disabled',
        value: 'Gray 400',
        cssVariable: 'var(--color-text-disabled)',
      },
      {
        token: 'color-text-inverse',
        name: 'Text Inverse',
        value: 'White',
        cssVariable: 'var(--color-text-inverse)',
      },
    ],
  },

  {
    name: 'Surface',
    colors: [
      {
        token: 'color-surface-primary',
        name: 'Surface Primary',
        value: 'White',
        cssVariable: 'var(--color-surface-primary)',
      },
      {
        token: 'color-surface-secondary',
        name: 'Surface Secondary',
        value: 'Gray 50',
        cssVariable: 'var(--color-surface-secondary)',
      },
      {
        token: 'color-surface-tertiary',
        name: 'Surface Tertiary',
        value: 'Gray 100',
        cssVariable: 'var(--color-surface-tertiary)',
      },
      {
        token: 'color-surface-inverse',
        name: 'Surface Inverse',
        value: 'Gray 900',
        cssVariable: 'var(--color-surface-inverse)',
      },
      {
        token: 'color-surface-disabled',
        name: 'Surface Disabled',
        value: 'Gray 200',
        cssVariable: 'var(--color-surface-disabled)',
      },
    ],
  },

  {
    name: 'Border',
    colors: [
      {
        token: 'color-border-default',
        name: 'Border Default',
        value: 'Gray 200',
        cssVariable: 'var(--color-border-default)',
      },
      {
        token: 'color-border-subtle',
        name: 'Border Subtle',
        value: 'Gray 100',
        cssVariable: 'var(--color-border-subtle)',
      },
      {
        token: 'color-border-strong',
        name: 'Border Strong',
        value: 'Gray 400',
        cssVariable: 'var(--color-border-strong)',
      },
      {
        token: 'color-border-focus',
        name: 'Border Focus',
        value: 'Blue 600',
        cssVariable: 'var(--color-border-focus)',
      },
      {
        token: 'color-border-error',
        name: 'Border Error',
        value: 'Red 600',
        cssVariable: 'var(--color-border-error)',
      },
    ],
  },

  {
    name: 'Actions',
    colors: [
      {
        token: 'color-action-primary',
        name: 'Action Primary',
        value: 'Blue 600',
        cssVariable: 'var(--color-action-primary)',
      },
      {
        token: 'color-action-primary-hover',
        name: 'Action Primary Hover',
        value: 'Blue 700',
        cssVariable: 'var(--color-action-primary-hover)',
      },
      {
        token: 'color-action-primary-active',
        name: 'Action Primary Active',
        value: 'Blue 800',
        cssVariable: 'var(--color-action-primary-active)',
      },
      {
        token: 'color-action-secondary',
        name: 'Action Secondary',
        value: 'Gray 100',
        cssVariable: 'var(--color-action-secondary)',
      },
      {
        token: 'color-action-secondary-hover',
        name: 'Action Secondary Hover',
        value: 'Gray 200',
        cssVariable: 'var(--color-action-secondary-hover)',
      },
      {
        token: 'color-action-secondary-active',
        name: 'Action Secondary Active',
        value: 'Gray 300',
        cssVariable: 'var(--color-action-secondary-active)',
      },
      {
        token: 'color-action-disabled',
        name: 'Action Disabled',
        value: 'Gray 200',
        cssVariable: 'var(--color-action-disabled)',
      },
    ],
  },

  {
    name: 'Feedback',
    colors: [
      {
        token: 'color-feedback-success',
        name: 'Feedback Success',
        value: 'Green 600',
        cssVariable: 'var(--color-feedback-success)',
      },
      {
        token: 'color-feedback-success-background',
        name: 'Feedback Success Background',
        value: 'Green 50',
        cssVariable: 'var(--color-feedback-success-background)',
      },
      {
        token: 'color-feedback-warning',
        name: 'Feedback Warning',
        value: 'Orange 600',
        cssVariable: 'var(--color-feedback-warning)',
      },
      {
        token: 'color-feedback-warning-background',
        name: 'Feedback Warning Background',
        value: 'Orange 50',
        cssVariable: 'var(--color-feedback-warning-background)',
      },
      {
        token: 'color-feedback-error',
        name: 'Feedback Error',
        value: 'Red 600',
        cssVariable: 'var(--color-feedback-error)',
      },
      {
        token: 'color-feedback-error-background',
        name: 'Feedback Error Background',
        value: 'Red 50',
        cssVariable: 'var(--color-feedback-error-background)',
      },
      {
        token: 'color-feedback-info',
        name: 'Feedback Info',
        value: 'Blue 600',
        cssVariable: 'var(--color-feedback-info)',
      },
      {
        token: 'color-feedback-info-background',
        name: 'Feedback Info Background',
        value: 'Blue 50',
        cssVariable: 'var(--color-feedback-info-background)',
      },
    ],
  },

  {
    name: 'Icon',
    colors: [
      {
        token: 'color-icon-primary',
        name: 'Icon Primary',
        value: 'Gray 900',
        cssVariable: 'var(--color-icon-primary)',
      },
      {
        token: 'color-icon-secondary',
        name: 'Icon Secondary',
        value: 'Gray 600',
        cssVariable: 'var(--color-icon-secondary)',
      },
      {
        token: 'color-icon-disabled',
        name: 'Icon Disabled',
        value: 'Gray 400',
        cssVariable: 'var(--color-icon-disabled)',
      },
      {
        token: 'color-icon-inverse',
        name: 'Icon Inverse',
        value: 'White',
        cssVariable: 'var(--color-icon-inverse)',
      },
      {
        token: 'color-icon-brand',
        name: 'Icon Brand',
        value: 'Blue 600',
        cssVariable: 'var(--color-icon-brand)',
      },
    ],
  },

  {
    name: 'Link',
    colors: [
      {
        token: 'color-link-default',
        name: 'Link Default',
        value: 'Blue 600',
        cssVariable: 'var(--color-link-default)',
      },
      {
        token: 'color-link-hover',
        name: 'Link Hover',
        value: 'Blue 700',
        cssVariable: 'var(--color-link-hover)',
      },
      {
        token: 'color-link-active',
        name: 'Link Active',
        value: 'Blue 800',
        cssVariable: 'var(--color-link-active)',
      },
    ],
  },

  {
    name: 'Overlay',
    colors: [
      {
        token: 'color-overlay-default',
        name: 'Overlay Default',
        value: 'Black 50%',
        cssVariable: 'var(--color-overlay-default)',
      },
    ],
  },
];
