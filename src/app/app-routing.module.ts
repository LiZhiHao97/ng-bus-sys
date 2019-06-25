import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import(`./pages/home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import(`./pages/login/login.module`).then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import(`./pages/register/register.module`).then(m => m.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
