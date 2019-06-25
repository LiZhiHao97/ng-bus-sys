import { Component, OnInit } from '@angular/core';
import { addDays, distanceInWords } from 'date-fns';
import { UserService } from '../../../service/user/user.service';
import { CommentService } from '../../../service/comment/comment.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  submitting = false;
  user = {
    author: '',
    avatar: '1'
  };
  inputValue = '';

  data = [

  ];

  constructor(
    private userService: UserService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    const userId = document.cookie.split('=')[1];
    this.userService.findOne(userId).subscribe(res => {
      const code = 'code';
      const user = 'data';
      if (res[code] === 1) {
        this.user = {
          author: res[user].username,
          avatar: res[user].headId
        };
      }
    });
    this.commentService.fetchAll().subscribe(res => {
      const comments = 'data';
      const newData = [];
      for (const item of res[comments].objectList) {
        newData.push({
          author: item.username,
          avatar: `../../../../assets/imgs/${item.headId}.png`,
          content: item.content,
          datetime: item.date,
          displayTime: distanceInWords(new Date(), item.date)
        });
      }
      this.data = [...newData];
      console.log(this.data);
    });
  }

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    this.commentService.generateComment({
      username: this.user.author,
      headId: this.user.avatar,
      content,
      date: new Date()
    }).subscribe(res => {
      const code = 'code';
      if (res[code] === 1) {
        setTimeout(() => {
          this.submitting = false;
          this.data = [
            {
              author: this.user.author,
              avatar: `../../../../assets/imgs/${this.user.avatar}.png`,
              content,
              datetime: new Date(),
              displayTime: distanceInWords(new Date(), new Date())
            },
            ...this.data
          ].map(e => {
            return {
              ...e,
              displayTime: distanceInWords(new Date(), e.datetime)
            };
          });
        }, 500);
      }
    });
  }

}
