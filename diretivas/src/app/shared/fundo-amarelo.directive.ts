import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef) {
    this._elementRef.nativeElement.style.backgroundColor = "yellow"
   }

}
