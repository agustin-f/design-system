import { Component } from '@angular/core';
import { spacingTokens } from '../../../../../styles/tokens/spacing';

@Component({
  selector: 'app-spacing',
  imports: [],
  templateUrl: './spacing.html',
  styleUrl: './spacing.css',
})
export class Spacing {
  spacing = spacingTokens;
}
