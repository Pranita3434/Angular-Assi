import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'string-length-app';
  userInput: string = '';
   stringLength: number = 0;

  onInputChange(event: Event) {
    this.userInput = (event.target as HTMLInputElement).value;
    this.stringLength = this.userInput.length;
  }
}
