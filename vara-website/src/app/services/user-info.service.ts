import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { UserAuthserviceService } from './user-authservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  

  constructor(public db:AngularFirestore,
    public afAuth: UserAuthserviceService, public router:Router) { }

    getUserByID(uid: string): Observable<User> {
      return this.db.collection('UserInfo').doc(uid).snapshotChanges().pipe(
        map(res => {
          const user = res.payload.data() as User;
          return user;
        })
      );
    }

    

}
