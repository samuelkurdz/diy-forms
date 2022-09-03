import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AriaActiveDescendantDirective } from './directives';



@NgModule({
  declarations: [
    AriaActiveDescendantDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AriaActiveDescendantDirective
  ]
})
export class SharedModule { }
