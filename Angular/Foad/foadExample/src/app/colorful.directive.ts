import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorful]'
})
export class ColorfulDirective {

availableColors=['green','#bd0000','#f64343','#ec0b0b'];

@HostBinding('style.color')color:string;
@HostBinding('style.border-color') borderColor:string;
@HostListener('keydown') newColor(){
  const randomColorIndex= Math.floor(Math.random() * this.availableColors.length);
this.color=this.borderColor=this.availableColors[randomColorIndex];
}
}
