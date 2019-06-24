import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { registerRoutes } from './register.routes';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(registerRoutes)
  ],
  providers: [],
  bootstrap: []
})
export class RegisterModule { }
