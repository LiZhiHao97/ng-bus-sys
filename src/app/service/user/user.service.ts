import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  findOne(userId) {
    return this.http.get(`/api/user/${userId}`);
  }

  findAll() {
    return this.http.get('/api/admin/users');
  }

  findAllDrivers() {
    return this.http.get('/api/admin/drivers');
  }
}
