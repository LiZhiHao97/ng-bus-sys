import { Component, OnInit } from '@angular/core';
import { BusService } from '../../../service/bus/bus.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-bus-details-list',
  templateUrl: './bus-details-list.component.html',
  styleUrls: ['./bus-details-list.component.scss']
})
export class BusDetailsListComponent implements OnInit {

  isVisible = false;
  isVisible2 = false;
  isVisible3 = false;

  lineNum: string;
  placeName: string;
  time: string;

  focusObject;
  focusStation;

  busData = [];

  constructor(
    private busService: BusService,
    private notification: NzNotificationService,
    private modalService: NzModalService
  ) { }

  ngOnInit() {
    this.busService.fetchAllBus().subscribe(res => {
      const data = 'data';
      const busData = res[data];
      console.log(busData);
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

  showModal3(bus , station): void {
    this.isVisible3 = true;
    this.focusObject = bus;
    this.focusStation = station;
    console.log(bus);
  }

  handleOk3(): void {
    const { focusObject, focusStation } = this;
    this.isVisible3 = false;
    const { placeName, time } = this;
    if (!placeName) {
      return this.createNotification('warning', '站名不得为空', '请重新输入' );
    }
    if (!time) {
      return this.createNotification('warning', '预计时间不得为空', '请重新输入' );
    }
    if (time.split(':').length !== 2) {
      return this.createNotification('warning', '时间格式不正确', '请重新输入' );
    }
    this.busService
    .update({
      id: focusStation.id,
      lineNum: focusObject.lineNum,
      placeName, position: focusStation.position,
      time: `${time}:00`,
      update: 'update'
    })
    .subscribe(res => {
      const code = 'code';
      if (res[code] === 1) {
        this.createNotification('success', '更新成功', '班次已更新' );
        this.busService.fetchAllBus().subscribe(res2 => {
          const data = 'data';
          const busData = res2[data];
          this.busData = [...busData];
        });
      } else {
        this.createNotification('warning', '操作失败', '请重新操作' );
      }
    });
  }

  handleCancel3(): void {
    this.isVisible3 = false;
  }

  move(direction, bus, station) {
    this.focusObject = bus;
    this.focusStation = station;
    const { focusObject, focusStation } = this;
    if (focusStation.position === 1 && direction === 'left') {
      return;
    }
    if (focusStation.position === focusObject.list.length && direction === 'right') {
      return;
    }
    let step;
    direction === 'left' ? step = -1 : step = 1;

    this.busService
    .update({
      id: focusStation.id,
      lineNum: focusObject.lineNum,
      placeName: focusStation.name,
      position: focusStation.position + step,
      time: focusStation.time,
      type: direction
    }).subscribe(res => {
      const code = 'code';
      if (res[code] === 1) {
        this.busService.fetchAllBus().subscribe(res2 => {
          const data = 'data';
          const busData = res2[data];
          this.busData = [...busData];
        });
      }
    });
  }

  delete(obj) {
    console.log(obj);
    this.modalService.confirm({
      nzTitle: '提醒',
      nzContent: '您是否要删除该站点，操作将无法撤销',
      nzOkText: 'OK',
      nzCancelText: 'Cancel',
      nzOnOk: () => {
        this.busService.deleteStation(obj.id).subscribe(res => {
          const code = 'code';
          if (res[code] === 1) {
            this.busService.fetchAllBus().subscribe(res2 => {
              const data = 'data';
              const busData = res2[data];
              this.busData = [...busData];
            });
          }
        });
      }
    });
  }

  createNotification(type: string, msg: string, text: string): void {
    this.notification.create(type, msg, text);
  }
}
