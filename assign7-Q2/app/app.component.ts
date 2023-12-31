import { Component } from '@angular/core';
import { WSAESHUTDOWN } from 'constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  a = 20;

public show(): String  { 
    var a = 'marvellous infosystems';
   return a;
  } 
}


