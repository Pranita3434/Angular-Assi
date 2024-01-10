import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringService } from '../string.service';
@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers : [StringService]
})
export class Child2Component {

  public CountCap : number;
  public Value = 'Marvellous Infosystem';

  constructor(private obj : StringService)
  {
    this.CountCap = this.obj.GetCountCapital(this.Value);
  }
}
