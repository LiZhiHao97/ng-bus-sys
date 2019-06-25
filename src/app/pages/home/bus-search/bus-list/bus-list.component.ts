import { Component, OnInit, Input } from '@angular/core';

declare var BMap: any;

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.scss']
})
export class BusListComponent implements OnInit {
  @Input() results: any;

  isVisible = false;

  constructor() { }

  ngOnInit() {
    console.log(this.results);
  }

  async showModal(name) {
    this.isVisible = true;
    await setTimeout(() => {
      const map = new BMap.Map('map');
      map.centerAndZoom('深圳', 11);
      const local = new BMap.LocalSearch(map, {
        renderOptions: {map}
      });
      local.search(name);
    }, 200);
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
