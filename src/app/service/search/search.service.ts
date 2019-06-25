import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  search(placeName, startTime, endTime) {
    console.log(`/api/bus/place?placeName=${placeName}&startTime=${startTime}&endTime=${endTime}`);
    return this.http.get(`/api/bus/place?placeName=${placeName}&startTime=${startTime}&endTime=${endTime}`);
  }
}
