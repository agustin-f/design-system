import { Component, computed, input } from '@angular/core';

type AvatarSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ds-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})
export class Avatar {
  src = input<string>();

  alt = input('Avatar');

  size = input<AvatarSize>('md');

  initials = input<string>();

  displayInitials = computed(() => {
    const value = this.initials()?.trim();

    if (!value) {
      return '';
    }

    return value
      .split(' ')
      .filter((word) => word.length > 0)
      .map((word) => word[0].toUpperCase())
      .join('')
      .slice(0, 2);
  });
}
