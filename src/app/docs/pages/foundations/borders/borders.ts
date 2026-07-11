import { Component } from '@angular/core';
import { BORDERS } from '../../../../../styles/tokens/borders';

@Component({
  selector: 'app-borders',
  imports: [],
  templateUrl: './borders.html',
  styleUrl: './borders.css',
})
export class Borders {
  borders = BORDERS;
}
