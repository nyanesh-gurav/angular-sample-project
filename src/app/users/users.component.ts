import { Component, OnInit } from '@angular/core';
import { User } from "../model/user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList: Array<User> = [];
  showParagraph: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.userList = [
      new User("Mahesh", 25),
      new User("Nyanesh", 24),
      new User("Ganesh", 25),
      new User("Rahul", 44),
      new User("Manoj", 35)
    ];
  }

}
