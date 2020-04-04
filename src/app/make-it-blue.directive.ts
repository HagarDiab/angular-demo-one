import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMakeItBlue]'
})
export class MakeItBlueDirective {

  constructor(private elRef: ElementRef ) {
    //will override css style
    elRef.nativeElement.style.backgroundColor = 'blue';
    elRef.nativeElement.style.color = 'white';
   }

}
