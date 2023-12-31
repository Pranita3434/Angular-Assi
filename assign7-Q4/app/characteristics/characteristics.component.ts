// characteristics.component.ts

import { Component } from '@angular/core';
import { Characteristics } from '../characteristics.model';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css'],
})
export class CharacteristicsComponent {
  characteristics: Characteristics = new Characteristics();
}
