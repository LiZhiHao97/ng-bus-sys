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
    if (this.getId(document.cookie) === '') {
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
    const arrcookie = cookies.split(';');
    for (const item of arrcookie) {
      const arr = item.split('=');
      if (arr[0].replace(/(^\s*)|(\s*$)/g, '') === 'ID') {
        return arr[1];
      }
    }
    return '';
  }

  createNotification(type: string, msg: string, text: string): void {
    this.notification.create(type, msg, text);
  }
}
