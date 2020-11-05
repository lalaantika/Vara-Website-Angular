import { Component, OnInit } from '@angular/core';
import { IdStorageService } from '../services/id-storage.service';
import { UserInfo } from '../interfaces/user-info';
import { UserInfoService } from '../services/user-info.service';
import { RideData } from '../interfaces/ride-data';
import { RideDataService } from '../services/ride-data.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  Uid: string = this.idStorage.getUId();
  userData: UserInfo;
  allRideData: RideData[];
  ride: RideData;

  constructor(public userInfo: UserInfoService, 
    public idStorage: IdStorageService,
    private rideService: RideDataService) { }

  ngOnInit(): void {
    this.getUserData();
    this.getRideData();
  }

  getUserData() {
    this.userInfo.getUserByID(this.Uid).subscribe((res) => {
      this.userData = res as unknown as UserInfo;
    })
  }

  getRideData() {
    this.rideService.getRideByDriverId().subscribe(
      res => {
        this.allRideData = res as Array<RideData>
       })
  }


}
