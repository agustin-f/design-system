import { Component, signal } from '@angular/core';
import { ColorPalette } from '../../../core/models/color-palette.model';
import { ColorRowComponent } from '../../shared/color-row/color-row';
import { TokenGroup } from '../../shared/token-group/token-group';
import { Button } from '../../../design-system/components/button/button';
import { PRIMITIVE_COLORS } from '../../../../styles/tokens/primitive-colors';
import { SEMANTIC_COLORS } from '../../../../styles/tokens/semantic-colors';
import { Typography } from './typography/typography';
import { Spacing } from './spacing/spacing';
import { Radius } from './radius/radius';
import { Shadows } from './shadows/shadows';
import { Borders } from './borders/borders';

@Component({
  selector: 'app-foundations',
  imports: [ColorRowComponent, TokenGroup, Typography, Spacing, Radius, Shadows, Borders],
  templateUrl: './foundations.html',
  styleUrl: './foundations.css',
})
export class Foundations {
  palettes = signal(PRIMITIVE_COLORS);
  semanticColors = signal(SEMANTIC_COLORS);
}
