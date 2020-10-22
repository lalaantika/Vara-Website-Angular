import { Component, OnInit } from '@angular/core';
import { UserAuthserviceService } from '../services/user-authservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public authService: UserAuthserviceService) { }

  ngOnInit(): void {
  }

}
