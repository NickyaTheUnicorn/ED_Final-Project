import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isCollapsed = false;

  locAuthService: any;

  constructor(private authService: AuthServiceService, private router: Router) {
    this.locAuthService = authService;
  }

  ngOnInit(): void {  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
