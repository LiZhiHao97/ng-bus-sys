import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../../../../service/search/search.service';
import { options } from './options';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output()
  public emitResults  = new EventEmitter();

  nzOptions: any[] | null = null;
  values: any[] | null = null;
  placeName: string;
  time = ['0:00', '23:59'];

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.nzOptions = options;
    }, 100);
  }

  onChanges(values: any): void {
    const time = this.values[this.values.length - 1].split('-');
    this.time = [...time];
  }

  search() {
    this.searchService.search(this.placeName, `${this.time[0]}:00`, `${this.time[1]}:00`).subscribe(res => {
      const data = 'data';
      const code = 'code';
      if (res[code] === 1) {
        this.emitResults.emit(res[data]);
      } else {
        this.emitResults.emit([]);
      }
    });
  }

}

