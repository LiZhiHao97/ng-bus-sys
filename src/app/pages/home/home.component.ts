import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user/user.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  routers: string[] = ['/home/search', '/home/users', '/home/busDetailsList', '/home/driverList', '/home/comment'];
  userInfo: any;
  visible = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
    if (this.getId(document.cookie) === -1) {
      this.router.navigate(['/login']);
      this.createNotification('warning', '你没有权限进入该页面', '请先登录');
    } else {
      const userId = this.getId(document.cookie);
      this.userService.findOne(userId).subscribe(res => {
        const code = 'code';
        const user = 'data';
        if (res[code] === 1) {
          this.userInfo = {...res[user]};
          console.log(this.userInfo);
        }
      });
    }
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  menuClick(index): void {
    this.router.navigate([this.routers[index]]);
  }

  getId(cookies) {
    const index = cookies.indexOf('ID');
    if (index === -1) {
      return index;
    }
    return cookies[index + 3];
  }

  createNotification(type: string, msg: string, text: string): void {
    this.notification.create(type, msg, text);
  }
}
