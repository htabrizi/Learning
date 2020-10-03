import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective {

  constructor(private templateRef:TemplateRef) { }


  @Input() images:string[];
}
