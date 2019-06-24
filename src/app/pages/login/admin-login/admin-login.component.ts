import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../service/login/login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  inputStyle = {
    marginTop: '20px'
  };

  username: string;
  password: string;
  role: 'ADMIN';

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  adminLogin(): void {
    const { username, password, role } = this;
    this.loginService.login({username, password, role});
  }

}
