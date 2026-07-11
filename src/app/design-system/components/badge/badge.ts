import { Component, input } from '@angular/core';

type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

@Component({
  selector: 'ds-badge',
  imports: [],
  templateUrl: './badge.html',
  styleUrl: './badge.css',
})
export class Badge {
  variant = input<BadgeVariant>('default');
}
