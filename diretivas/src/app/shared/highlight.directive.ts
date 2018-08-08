import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'p[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver() {
    //this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow')
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    //this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'white')
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string

  @Input('default') defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow'

  ngOnInit() {
    this.backgroundColor = this.defaultColor
  }
  
  constructor(private _elementRef: ElementRef, private _renderer: Renderer) { }

}
