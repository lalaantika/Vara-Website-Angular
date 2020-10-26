import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { UserAuthserviceService } from './user-authservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  

  constructor(public db:AngularFirestore,
    public afAuth: UserAuthserviceService,) { }

  

}
