import { DOCUMENT } from '@angular/common';
import { Directive, Inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[diyAriaActiveDescendant]',
})
export class AriaActiveDescendantDirective {
  
  @Input() diyAriaActiveDescendant: string;
  index: number | null;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) { }

  getActive() {
    return this.index as number;
  }

  setActive(index: number | null) {
    const controlElement = this.document.getElementById(this.diyAriaActiveDescendant);
    if (controlElement) {
      this.index = index;
      if (index && index >= 0) {
        this.renderer.setAttribute(controlElement, "aria-activedescendant", `${index}`);
      } else {
        this.renderer.removeAttribute(controlElement, "aria-activedescendant");
      }
    }
  }
}
