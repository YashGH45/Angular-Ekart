import {Directive, ElementRef, OnInit, Renderer2} from "@angular/core";

@Directive({
  standalone: true,
  selector: '[setBackground]'
})

export class SetBackground implements OnInit{

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#36454F');
    this.renderer.setStyle(this.element.nativeElement, 'color', 'yellow');
  }

}
