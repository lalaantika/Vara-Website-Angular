import { Component, OnInit } from '@angular/core';
import { IdStorageService } from '../services/id-storage.service';
import { User } from '../services/user';
import { UserInfo } from '../services/user-info';
import { UserInfoService } from '../services/user-info.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  Uid: string = this.idStorage.getUId();
  userData: UserInfo;

  constructor(public userInfo: UserInfoService, public idStorage: IdStorageService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.userInfo.getUserByID(this.Uid).subscribe((res) => {
      this.userData = res as unknown as UserInfo;
    })
  }
}
