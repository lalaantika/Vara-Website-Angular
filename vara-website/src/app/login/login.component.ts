import { Component, OnInit } from '@angular/core';
import { UserAuthserviceService } from '../services/user-authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: UserAuthserviceService) {
   }

  ngOnInit(): void {
  }

  reload(){
    setTimeout(function(){
    location.reload();
    },1000); 
  }
}
