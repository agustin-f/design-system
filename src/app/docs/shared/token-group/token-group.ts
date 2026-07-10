import { Component, input } from '@angular/core';

@Component({
  selector: 'app-token-group',
  imports: [],
  templateUrl: './token-group.html',
  styleUrl: './token-group.css',
})
export class TokenGroup {
  title = input.required<string>();
}
