import { Component, OnInit } from '@angular/core';
import { BusService } from '../../../service/bus/bus.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-bus-details-list',
  templateUrl: './bus-details-list.component.html',
  styleUrls: ['./bus-details-list.component.scss']
})
export class BusDetailsListComponent implements OnInit {

  isVisible = false;
  isVisible2 = false;

  lineNum: string;
  placeName: string;
  time: string;

  focusObject;

  busData = [];

  constructor(
    private busService: BusService,
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.busService.fetchAllBus().subscribe(res => {
      const data = 'data';
      const busData = res[data];
      this.busData = [...busData];
    });
  }

  changeObject(item) {
    this.focusObject = item;
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk() {
    this.isVisible = false;
    const { lineNum, placeName, time } = this;
    if (!lineNum) {
      return this.createNotification('warning', '班次不得为空', '请重新输入' );
    }
    if (!placeName) {
      return this.createNotification('warning', '首发站不得为空', '请重新输入' );
    }
    if (!time) {
      return this.createNotification('warning', '发车时间不得为空', '请重新输入' );
    }
    if (time.split(':').length !== 2) {
      return this.createNotification('warning', '时间格式不正确', '请重新输入' );
    }
    this.busService.generateBus({ lineNum, placeName, position: '1', time: `${time}:00` }).subscribe(res => {
      const code = 'code';
      const msg = 'msg';
      if (res[code] === 1) {
        this.createNotification('success', res[msg], '新的班次已添加' );
        this.busService.fetchAllBus().subscribe(res2 => {
          const data = 'data';
          const busData = res2[data];
          this.busData = [...busData];
        });
      } else {
        this.createNotification('warning', res[msg], '请重新操作' );
      }
    });
    [this.lineNum, this.placeName, this.time] = '';
  }

  handleCancel(): void {
    this.isVisible = false;
    [this.lineNum, this.placeName, this.time] = '';
  }

  showModal2(): void {
    this.isVisible2 = true;
  }

  handleOk2() {
    this.isVisible2 = false;
    const { placeName, time } = this;
    const { focusObject } = this;
    const position = `${focusObject.list.length + 1}`;
    if (!placeName) {
      return this.createNotification('warning', '站名不得为空', '请重新输入' );
    }
    if (!time) {
      return this.createNotification('warning', '预计时间不得为空', '请重新输入' );
    }
    if (time.split(':').length !== 2) {
      return this.createNotification('warning', '时间格式不正确', '请重新输入' );
    }
    this.busService.generateStation({ lineNum: focusObject.lineNum, placeName, position, time: `${time}:00` }).subscribe(res => {
      const code = 'code';
      const msg = 'msg';
      if (res[code] === 1) {
        this.createNotification('success', res[msg], '新的班次已添加' );
        this.busService.fetchAllBus().subscribe(res2 => {
          const data = 'data';
          const busData = res2[data];
          this.busData = [...busData];
        });
      } else {
        this.createNotification('warning', res[msg], '请重新操作' );
      }
    });
    [this.lineNum, this.placeName, this.time] = '';
    console.log(this.focusObject);
  }

  handleCancel2(): void {
    this.isVisible2 = false;
    [this.lineNum, this.placeName, this.time] = '';
  }

  createNotification(type: string, msg: string, text: string): void {
    this.notification.create(type, msg, text);
  }

}
