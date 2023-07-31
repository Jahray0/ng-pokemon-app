import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSurvol]',
})
export class SurvolDirective {
  @Input() colorChoose!: string;
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.colorChoose);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor('white');
  }

  setColor(colorChoose: string) {
    this.el.nativeElement.style.backgroundColor = colorChoose;
  }
}
