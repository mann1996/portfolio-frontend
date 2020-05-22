import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { DataService } from '../service/data.service';
import { ProfileModel } from '../model/profile.model';

@Component({
  selector: 'app-search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.scss'],
})
export class SearchPeopleComponent implements OnInit {
  profileList: ProfileModel[];
  imgUrl = '../../assets/images/profile.jpg';
  constructor(private userService: UserService, private data: DataService) {}

  ngOnInit(): void {
    this.data.currentKey.subscribe((key) => {
      this.search(key);
    });
  }

  search(key) {
    if (key.length > 0)
      this.userService
        .searchUser(key)
        .subscribe((profiles) => (this.profileList = profiles));
  }
}
