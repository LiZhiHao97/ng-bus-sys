import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private notification: NzNotificationService,
    private router: Router
  ) { }

  login(data): void {
    if (!data.username) {
      this.createNotification('warning', '用户名不得为空', '请重新输入');
      return;
    }
    if (!data.password) {
      this.createNotification('warning', '密码不得为空', '请重新输入');
      return;
    }
    this.http.post('/api/user/login', data, httpOptions).subscribe(res => {
      const code = 'code';
      const msg = 'msg';
      const user = 'user';
      if (res[code] === 1) {
        this.createNotification('success', res[msg], '登录成功' );
        this.router.navigate(['/home']);
      } else {
        this.createNotification('warning', res[msg], '请重新输入' );
      }
    });
  }

  createNotification(type: string, msg: string, text: string): void {
    this.notification.create(type, msg, text);
  }
}
