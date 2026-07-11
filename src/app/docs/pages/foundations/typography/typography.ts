import { Component } from '@angular/core';
import { typographyTokens } from '../../../../../styles/tokens/typography';

@Component({
  selector: 'app-typography',
  imports: [],
  templateUrl: './typography.html',
  styleUrl: './typography.css',
})
export class Typography {
  typography = typographyTokens;
}
