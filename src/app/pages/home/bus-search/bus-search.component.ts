import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-bus-search',
  templateUrl: './bus-search.component.html',
  styleUrls: ['./bus-search.component.scss']
})
export class BusSearchComponent implements OnInit {

  results = [];

  constructor() { }

  ngOnInit() {

  }

  fetchResults(results) {
    this.results = [...results];
    console.log(results);
  }

}
