import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { UserResponseModel } from './model/user-response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loggedInUser: string;
  userDetails: UserResponseModel;
  title = 'portfolio-frontend';
  menuActive = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    if (this.userService.loggedIn()) {
      this.loggedInUser = this.userService.getUserId();
      this.userService.getUser(this.loggedInUser).subscribe(
        (response) => (this.userDetails = response),
        (error) => console.log(error)
      );
    }
  }

  activateMenu() {
    if (this.menuActive) this.menuActive = false;
    else this.menuActive = true;
  }

  signOut() {
    this.userService.clearJwt();
    window.location.reload();
  }
}
