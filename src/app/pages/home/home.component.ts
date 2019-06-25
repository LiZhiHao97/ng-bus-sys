import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  routers: string[] = ['/home/search', '/home/users', '/home/busDetailsList'];
  avatarUrl: string;
  visible = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.avatarUrl = `../../assets/imgs/3.png`;
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
