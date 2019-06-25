import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user/user.service';

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
    private userService: UserService
  ) { }

  ngOnInit() {
    const userId = document.cookie.split('=')[1];
    this.userService.findOne(userId).subscribe(res => {
      const code = 'code';
      const user = 'data';
      if (res[code] === 1) {
        this.userInfo = {...res[user]};
        console.log(this.userInfo);
      }
    });
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
}
