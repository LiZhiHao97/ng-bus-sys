import { Component, OnInit } from '@angular/core';
import { options } from './options';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  nzOptions: any[] | null = null;
  values: any[] | null = null;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.nzOptions = options;
    }, 100);
  }

  onChanges(values: any): void {
    console.log(values, this.values);
  }

}

