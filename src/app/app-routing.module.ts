import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import('./authentication/authentication.module')
    .then(m => m.AuthenticationModule)
  },
  {
    path: "account",
    loadChildren: () => import('./pages/account/account.module')
    .then(m => m.AccountModule)
  },
  {
    path: "",
    pathMatch: "full",
    loadComponent: () => import('./pages/landing-page/landing-page.component')
      .then(m => m.LandingPageComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
