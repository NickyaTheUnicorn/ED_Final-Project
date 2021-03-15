import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../user-interface';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: UserInterface = {};

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    this.userService.fetchData().subscribe(result => {
      this.fetchUserData(result);
    });
  }

  private fetchUserData(result: any): void {
    this.user.email = result.email;
    this.user.firstName = result.firstName;
    this.user.lastName = result.lastName;
    this.user.username = result.username;
  }

}
