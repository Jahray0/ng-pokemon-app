import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]',
})
export class BorderCardDirective {
  @Input() borderColor!: string;

  initialColor: string = '#f5f5f5';
  defaultColor: string = '#009688';
  defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }

  setBorder(borderColor: string) {
    let border = 'solid 4px ' + borderColor;
    this.el.nativeElement.style.border = border;
  }
}
