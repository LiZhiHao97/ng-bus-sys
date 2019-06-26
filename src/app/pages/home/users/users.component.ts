import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user/user.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  listOfData = [];

  constructor(
    private userService: UserService,
    private notification: NzNotificationService,
    private modalService: NzModalService
  ) { }

  async ngOnInit() {
    this.userService.findAll().subscribe(res => {
      const code = 'code';
      const data = 'data';
      let newData = [];
      res[data].objectList.forEach((item, index) => {
        newData.push({
          key: `${index}`,
          username: item.username,
          mail: item.mail,
          telephone: item.telephone,
          role: item.role,
          id: item.id
        });
      });
      newData = newData.filter(item => item.role === 'USER');
      console.log(newData);
      this.listOfData = [...newData];
    });
  }

  delete(obj) {
    console.log(obj);
    const newData = this.listOfData.filter(item => item.key !== obj.key);
    this.userService.deleteOne(obj.id).subscribe(res => {
      const code = 'code';
      if (res[code] === 1) {
        this.createNotification('success', '删除成功', '该用户已被永久移除' );
      }
    });
    this.listOfData = [...newData];
  }

  createNotification(type: string, msg: string, text: string): void {
    this.notification.create(type, msg, text);
  }

  showConfirm(obj): void {
    this.modalService.confirm({
      nzTitle: '提醒',
      nzContent: '您是否要删除该用户，该操作将无法回退',
      nzOkText: 'OK',
      nzCancelText: 'Cancel',
      nzOnOk: () => this.delete(obj)
    });
  }
}
