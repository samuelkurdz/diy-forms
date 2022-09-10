import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountContainerComponent } from './account-container/account-container.component';
import { HomescreenComponent } from './homescreen/homescreen.component';

const routes: Routes = [

  {
    path: '',
    component: AccountContainerComponent,
    children: [
      {
        path: '',
        component: HomescreenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
