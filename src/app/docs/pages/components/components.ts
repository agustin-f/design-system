import { Component, input } from '@angular/core';
import { TokenGroup } from '../../shared/token-group/token-group';
import { Button } from '../../../design-system/components/button/button';
import { Input } from '../../../design-system/components/input/input';
import { ComponentSection } from '../../shared/component-section/component-section';
import { Card } from '../../../design-system/components/card/card';
import { Badge } from '../../../design-system/components/badge/badge';
import { Avatar } from '../../../design-system/components/avatar/avatar';
import { Checkbox } from '../../../design-system/components/checkbox/checkbox';

@Component({
  selector: 'app-components',
  imports: [Button, Input, ComponentSection, Card, Badge, Avatar, Checkbox],
  templateUrl: './components.html',
  styleUrl: './components.css',
})
export class Components {}
