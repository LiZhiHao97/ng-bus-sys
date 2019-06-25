import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../service/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  inputStyle = {
    marginTop: '20px'
  };

  username: string;
  password: string;
  checkPassword: string;
  mail: string;
  telephone: string;

  constructor(
    private registerService: RegisterService
  ) { }

  ngOnInit() {

  }

  register() {
    const { username, password, checkPassword, mail, telephone } = this;
    this.registerService.register({ username, password, mail, telephone }, checkPassword);
  }

}
