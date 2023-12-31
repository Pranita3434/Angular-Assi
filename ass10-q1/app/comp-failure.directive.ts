import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCompFailure]',
  standalone: true
})
export class CompFailureDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover') onMouseOver() {
    this.changeColor('red');
  }

  @HostListener('mouseout') onMouseOut() {
    this.changeColor('black');
  }

  private changeColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
  

}
