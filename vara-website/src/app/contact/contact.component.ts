import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  latitude = 	45.424721;
  longitude =	-75.695000;

  constructor() { }

  ngOnInit(): void {
  }

}
