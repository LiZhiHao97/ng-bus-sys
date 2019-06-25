import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BusService {
  constructor(
    private http: HttpClient,
    private notification: NzNotificationService
  ) { }

  fetchAllBus() {
    return this.http.get('/api/bus/all');
  }

  generateBus(data) {
    return this.http.post('/api/admin/bus/add', data, httpOptions);
  }

  generateStation(data) {
    return this.http.post('/api/admin/bus/addStop', data, httpOptions);
  }

  createNotification(type: string, msg: string, text: string): void {
    this.notification.create(type, msg, text);
  }
}
