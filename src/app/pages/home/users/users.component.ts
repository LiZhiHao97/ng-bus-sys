import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  listOfData = [];

  constructor(
    private userService: UserService
  ) { }

  async ngOnInit() {
    this.userService.findAll().subscribe(res => {
      const code = 'code';
      const data = 'data';
      console.log(res[data].objectList);
      const newData = [];
      res[data].objectList.forEach((item, index) => {
        newData.push({
          key: `${index}`,
          username: item.username,
          mail: item.mail,
          telephone: item.telephone
        });
      });
      this.listOfData = [...newData];
    });
  }

}
