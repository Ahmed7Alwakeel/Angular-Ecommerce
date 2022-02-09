import { Directive, ElementRef, Input,HostListener,OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[CardShadow]'
})


export class CardShadowDirective implements OnChanges{
  @Input('CardShadow') overColor:string="black";
  @Input() defaultColor:string="grey";    //intial vaules can change them in html
  constructor( private elemRef:ElementRef) {
    //ref of my element
   }
  ngOnChanges(): void {
    this.elemRef.nativeElement.style.border=`5px solid ${this.defaultColor}`;  //once load get default
  }
   @HostListener('mouseover') onMouseOver()
{
  this.elemRef.nativeElement.style.border=`5px solid ${this.overColor}`  //when event
}

@HostListener('mouseout') onMouseOut()
{
  this.elemRef.nativeElement.style.border=`5px solid ${this.defaultColor}`;
}

}

