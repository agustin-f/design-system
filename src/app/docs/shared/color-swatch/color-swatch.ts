import { Component, input } from '@angular/core';
import { ColorToken } from '../../../core/models/color-token.model';

@Component({
  selector: 'app-color-swatch',
  imports: [],
  templateUrl: './color-swatch.html',
  styleUrl: './color-swatch.css',
})
export class ColorSwatch {
  token = input.required<ColorToken>();
  palette = input.required<string>();
}
