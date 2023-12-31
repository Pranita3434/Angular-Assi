import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]',
  standalone: true
})
export class CompSuccessDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover') onMouseOver() {
    this.changeColor('green');
  }

  @HostListener('mouseout') onMouseOut() {
    this.changeColor('black');
  }

  private changeColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

}
