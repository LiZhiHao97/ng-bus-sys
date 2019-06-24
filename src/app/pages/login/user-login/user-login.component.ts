import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LoginService } from '../../../service/login/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  inputStyle = {
    marginTop: '20px'
  };

  username: string;
  password: string;
  role: 'USER';

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {

  }
  userLogin(): void {
    const { username, password, role } = this;
    this.loginService.login({username, password, role});
  }

}
