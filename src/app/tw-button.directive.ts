import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';


@Directive({
  selector: '[tw-button]',
  standalone: true
})
export class TwButtonDirective implements OnInit{
@Input() buttonBackgroundColor!: string;

  constructor(private renderer:Renderer2,private el:ElementRef) { }

  ngOnInit(){
    const componentDefinition = ['lg:ml-0', 'm-auto', 'w-auto', 'relative', `bg-${this.buttonBackgroundColor}-400`,  `text-${this.buttonBackgroundColor}-50`, 'font-bold' ,'py-4', 'px-6', 'max-w-fit', 'uppercase', 'text-sm', 'cursor-pointer','before:bg-white', 'before:h-0', 'before:absolute', 'before:w-full', 'before:left-0', 'before:top-0', 'before:bg-opacity-20', 'hover:before:h-full', 'before:transition-all', 'before:duration-500', 'before:ease-in-out'];
    componentDefinition.forEach((item) => {
      this.renderer.addClass(this.el.nativeElement, item);
    });

  }

}


