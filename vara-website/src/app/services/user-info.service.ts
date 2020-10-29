import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';
import { UserAuthserviceService } from './user-authservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  

  constructor(public db:AngularFirestore,
    public afAuth: UserAuthserviceService,) { }

    getUserByID(uid: string): Observable<User> {
      return this.db.collection('UserInfo').doc(uid).snapshotChanges().pipe(
        map(res => {
          const user = res.payload.data() as User;
          return user;
        })
      );
    }

}
