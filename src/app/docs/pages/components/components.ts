import { Component } from '@angular/core';
import { TokenGroup } from '../../shared/token-group/token-group';
import { Button } from '../../../design-system/components/button/button';

@Component({
  selector: 'app-components',
  imports: [TokenGroup, Button],
  templateUrl: './components.html',
  styleUrl: './components.css',
})
export class Components {}
