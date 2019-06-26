import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user/user.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit {

  listOfData = [];

  constructor(
    private userService: UserService,
    private notification: NzNotificationService,
    private modalService: NzModalService
  ) { }

  ngOnInit() {
    this.userService.findAllDrivers().subscribe(res => {
      const code = 'code';
      const data = 'data';
      console.log(res[data].objectList);
      const newData = [];
      res[data].objectList.forEach((item, index) => {
        newData.push({
          key: `${index}`,
          name: item.name,
          lineNum: item.lineNum,
          license: item.license,
          telephone: item.telephone,
          id: item.id
        });
      });
      this.listOfData = [...newData];
    });
  }

  delete(obj) {
    console.log(obj);
    const newData = this.listOfData.filter(item => item.key !== obj.key);
    this.userService.deleteDriver(obj.id).subscribe(res => {
      const code = 'code';
      if (res[code] === 1) {
        this.createNotification('success', '删除成功', '该司机已被永久移除' );
      }
    });
    this.listOfData = [...newData];
  }

  showConfirm(obj): void {
    this.modalService.confirm({
      nzTitle: '提醒',
      nzContent: '您是否要删除该司机，该操作将无法回退',
      nzOkText: 'OK',
      nzCancelText: 'Cancel',
      nzOnOk: () => this.delete(obj)
    });
  }

  createNotification(type: string, msg: string, text: string): void {
    this.notification.create(type, msg, text);
  }

}
