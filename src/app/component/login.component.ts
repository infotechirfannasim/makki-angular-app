import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'login-component',
  templateUrl: '../template/login.template.html'
})
export class LoginComponent implements OnInit {

  username: string | undefined;
  password: string | undefined;

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (localStorage.getItem('access_token')) {
      this.router.navigate(['/dashboard']);
    }
  }

  login() {
    if (this.username == 'admin' && this.password == 'admin') {
      localStorage.setItem("access_token", this.username);
      this.router.navigate(['/dashboard']);
    } else {
      alert("bad credentials");
    }
  }


}
