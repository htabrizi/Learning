import { Directive, Input, TemplateRef } from '@angular/core';

import {ICarouselContext} from './interfaces/app-interface';
@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective {

  context :ICarouselContext

  constructor(private templateRef:TemplateRef) { }


  @Input() images:string[];
}
