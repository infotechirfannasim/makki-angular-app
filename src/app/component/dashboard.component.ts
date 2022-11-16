import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'dashboard-component',
  templateUrl: '../template/dashboard.template.html'
})
export class DashboardComponent implements OnInit {

  username: string | undefined;
  password: string | undefined;

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (!localStorage.getItem('access_token')) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }


}
