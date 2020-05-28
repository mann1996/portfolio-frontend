import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProfileModel } from '../model/profile.model';
import { UserService } from '../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PostResponseModel } from '../model/post-response.model';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userProfile: ProfileModel = new ProfileModel();
  following: boolean = false;
  publicPosts: PostResponseModel[] = [];
  constructor(
    private userService: UserService,
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let userId = this.route.snapshot.paramMap.get('userId');
    this.userService.getUserProfile(userId).subscribe((response) => {
      this.userProfile = response;
      this.postService
        .findPublicPostsByUser(userId)
        .subscribe((posts) => (this.publicPosts = posts));
    });
  }

  toggleFollow(event) {
    event.preventDefault();
    if (this.userService.loggedIn) {
      let userid = this.route.snapshot.paramMap.get('userId');
      this.userService.toggleFollow(userid).subscribe((success) => {
        this.userProfile.followingStatus = !this.userProfile.followingStatus;
        if (this.userProfile.followingStatus) this.userProfile.followers += 1;
        else this.userProfile.followers -= 1;
      });
    }
  }
}
