import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthserviceService } from '../services/user-authservice.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor(public userauthService: UserAuthserviceService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.userauthService.isLoggedIn;
    console.log(this.isLoggedIn$)
  }
 
}
