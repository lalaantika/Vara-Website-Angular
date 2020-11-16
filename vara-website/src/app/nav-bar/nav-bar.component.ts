import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IdStorageService } from '../services/id-storage.service';
import { UserAuthserviceService } from '../services/user-authservice.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn$:string
  constructor(public idstorage: IdStorageService,
    public userauthService: UserAuthserviceService) { }

  ngOnInit(): void {
   this.isLoggedIn$ = this.idstorage.getUloggedIn()
  }

  reload(){
    setTimeout(function(){
    location.reload();
    },1000); 
  }
}
