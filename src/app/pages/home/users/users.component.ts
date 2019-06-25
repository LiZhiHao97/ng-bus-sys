import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  listOfData = [
    {
      key: '1',
      username: '该用户已成仙',
      mail: '940166841@qq.com',
      telphone: '13868224404'
    },
    {
      key: '2',
      username: '蟹粽蚁',
      mail: '123@qq.com',
      telphone: '110'
    },
    {
      key: '3',
      username: '鼎内',
      mail: '456@qq.com',
      telphone: '119'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
