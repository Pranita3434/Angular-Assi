import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = 'Marvellous Infosystems';

  public fun(): void 
  {
    this.text = 'Educating for a better tommorow'!;
  }
}
