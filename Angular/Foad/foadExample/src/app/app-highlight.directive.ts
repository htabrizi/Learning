import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }
@Input(appAppHighlight) highlightColor:string ='yellow';

@HostListener('mouseenter') onMouseEnter(){
this.changeBackGroundColor('yellow');
}

@HostListener('mouseleave') onMouseLeave(){
  this.changeBackGroundColor('Pink');
}

private changeBackGroundColor(color:string){
 // this.elementRef.nativeElement.style.backgroundColor=color;
this.renderer.setStyle(this.elementRef.nativeElement,'background-color',color);
}


}
