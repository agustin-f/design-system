import { Component } from '@angular/core';
import { radiusTokens } from '../../../../../styles/tokens/radius';

@Component({
  selector: 'app-radius',
  imports: [],
  templateUrl: './radius.html',
  styleUrl: './radius.css',
})
export class Radius {
  radius = radiusTokens;
}
