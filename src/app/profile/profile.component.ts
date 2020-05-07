import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProfileModel } from '../model/profile.model';
import { UserService } from '../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userProfile: ProfileModel = new ProfileModel();
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let userId = this.route.snapshot.paramMap.get('userId');
    this.userService.getUserProfile(userId).subscribe(
      (response) => {
        if (response) this.userProfile = response;
      },
      (error) => {
        this.userService.clearJwt();
        this.router.navigate(['/login']);
      }
    );
  }
}
