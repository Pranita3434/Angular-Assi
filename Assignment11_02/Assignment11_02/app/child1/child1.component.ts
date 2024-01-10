import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberService } from '../number.service';
@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers : [NumberService]
})
export class Child1Component {

  public ChkP : boolean = false;
  public number1 : number = 5;

  constructor(private obj : NumberService)
  {
    this.ChkP = this.obj.GetChkPrime(this.number1);
  }

}
