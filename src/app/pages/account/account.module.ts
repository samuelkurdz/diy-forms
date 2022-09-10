import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { SharedModule } from '@shared';
import { AccountContainerComponent } from './account-container/account-container.component';
import { ShowcaseComponent } from './showcase/showcase.component';


@NgModule({
  declarations: [
    HomescreenComponent,
    AccountContainerComponent,
    ShowcaseComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ]
})
export class AccountModule { }
