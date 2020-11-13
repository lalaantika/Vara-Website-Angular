import { Component, OnInit } from '@angular/core';
import { IdStorageService } from '../services/id-storage.service';
import { UserInfo } from '../interfaces/user-info';
import { UserInfoService } from '../services/user-info.service';
import { RideData } from '../interfaces/ride-data';
import { RideDataService } from '../services/ride-data.service';
import { Router } from '@angular/router';

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
  adminStatus:boolean;

  constructor(public userInfo: UserInfoService, 
    public idStorage: IdStorageService,
    private rideService: RideDataService,
    public router: Router) { }

  ngOnInit(): void {
    this.getUserData();
    this.getRideData();
    console.log(this.adminStatus);
  }

  getUserData() {
    this.userInfo.getUserByID(this.Uid).subscribe((res) => {
      this.userData = res as unknown  as UserInfo;
    })
  }

  getRideData() {
    this.rideService.getRideByDriverId().subscribe(
      res => {
        this.allRideData = res as Array<RideData>
       })
  }

  getInvestor(investor){
    if (investor == true){
      this.router.navigate(['/investor-page']);
    }else{
      this.router.navigate(['/profile-info']);
    }
  }


}
