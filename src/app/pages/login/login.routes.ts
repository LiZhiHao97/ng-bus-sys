import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';

export const loginRoutes = [
    {
      path: '',
      component: LoginComponent,
      children: [
        {
          path: '',
          redirectTo: 'user',
          pathMatch: 'full'
        },
        {
          path: 'admin',
          component: AdminLoginComponent
        },
        {
          path: 'user',
          component: UserLoginComponent
        }
      ]
    }
];
