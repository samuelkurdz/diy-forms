import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { DropdownComponent } from '@components';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DropdownComponent
  ],
  exports: [
    TopbarComponent
  ]
})
export class NavigationModule { }
