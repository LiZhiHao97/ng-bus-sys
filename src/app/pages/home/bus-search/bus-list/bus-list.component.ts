import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.scss']
})
export class BusListComponent implements OnInit {
  panels = [
    {
      active: true,
      name: '国际烟酒城（7:56）',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: '国际烟酒城（7:56）'
    },
    {
      active: false,
      disabled: false,
      name: '国际烟酒城（7:56）'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
