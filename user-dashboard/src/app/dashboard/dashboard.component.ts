import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../user-interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: UserInterface;

  constructor() {
    this.user = {
      firstName: 'Yannick',
      lastName: 'Renner',
      username: 'rennery',
      email: 'yannick@email.com',
      password: '123456'
    };
  }

  ngOnInit(): void {
  }

}
