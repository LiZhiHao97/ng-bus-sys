import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user/user.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit {

  listOfData = [];

  constructor(
    private userService: UserService
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
          telephone: item.telephone
        });
      });
      this.listOfData = [...newData];
    });
  }

}
