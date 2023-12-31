import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() messageToChild: string = '';
  @Output() messageFromChild = new EventEmitter<string>();

  sendMessageToParent() {
    this.messageFromChild.emit('Hello from Child');
  }
}
