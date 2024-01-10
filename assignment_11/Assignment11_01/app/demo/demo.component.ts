import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmeticService } from '../arithmetic.service';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html', 
  styleUrl: './demo.component.css',
  providers : [ArithmeticService]
})
export class DemoComponent {

  public Addition : number;
  public Substraction : number;

  public number1: number = 10;
  public number2: number = 2;

  constructor(private obj : ArithmeticService)
  {
    this.Addition = this.obj.GetAdd(this.number1, this.number2);
    this.Substraction = this.obj.GetSub(this.number1, this.number2);
  }

}

