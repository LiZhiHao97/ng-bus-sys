import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login.component';
import { loginRoutes } from './login.routes';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [
    LoginComponent,
    AdminLoginComponent,
    UserLoginComponent,
  ],
  imports: [
    RouterModule.forChild(loginRoutes),
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }
