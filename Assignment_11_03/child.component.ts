import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers : [ NumberService,StringService ]
})
export class ChildComponent {

  public ChkP : boolean = false;
  public number1 : number = 5;

  public CountCap : number;
  public Value = 'Marvellous Infosystem';

  constructor(private obj1 : NumberService, private obj2 : StringService )
  {
    this.ChkP = this.obj1.GetChkPrime(this.number1);
    this.CountCap = this.obj2.GetCountCapital(this.Value);
  }

}
