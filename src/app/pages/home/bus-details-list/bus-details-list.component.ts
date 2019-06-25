import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  showModal2(): void {
    this.isVisible2 = true;
  }

  handleOk2(): void {
    console.log('Button ok clicked!');
    this.isVisible2 = false;
  }

  handleCancel2(): void {
    console.log('Button cancel clicked!');
    this.isVisible2 = false;
  }

}
