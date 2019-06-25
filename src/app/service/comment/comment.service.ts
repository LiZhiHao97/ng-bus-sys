import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  fetchAll() {
    return this.http.get('/api/user/bbs');
  }

  generateComment(data) {
    return this.http.post('/api/user/bbs/comment', data, httpOptions);
  }
}
