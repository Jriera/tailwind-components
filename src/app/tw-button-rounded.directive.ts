import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';
import {TwButtonDirective} from "./tw-button.directive";

@Directive({
  selector: '[TwButtonRounded]',
  standalone: true,
  hostDirectives: [
    {
      directive: TwButtonDirective,
      inputs: ['buttonBackgroundColor: color']
    }
  ],
})
export class TwButtonRoundedDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'rounded-full');
  }
}
