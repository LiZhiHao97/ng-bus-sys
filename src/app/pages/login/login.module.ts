import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login.component';
import { loginRoutes } from './login.routes';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    RouterModule.forChild(loginRoutes),
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }
