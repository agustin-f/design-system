import { Component, input, signal } from '@angular/core';
import { ColorPalette } from '../../../core/models/color-palette.model';

@Component({
  selector: 'app-color-row',
  standalone: true,
  templateUrl: './color-row.html',
  styleUrl: './color-row.css',
})
export class ColorRowComponent {
  palette = input.required<ColorPalette>();

  copiedToken = signal<string | null>(null);

  async copyToken(token: string) {
    await navigator.clipboard.writeText(token);

    this.copiedToken.set(token);

    setTimeout(() => {
      this.copiedToken.set(null);
    }, 1500);
  }
}
