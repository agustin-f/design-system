import { Component } from '@angular/core';
import { SHADOWS } from '../../../../../styles/tokens/shadow';

@Component({
  selector: 'app-shadows',
  imports: [],
  templateUrl: './shadows.html',
  styleUrl: './shadows.css',
})
export class Shadows {
  shadows = SHADOWS;
}
