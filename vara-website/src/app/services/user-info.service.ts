import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(public db:AngularFirestore) { }

  createUser(fname: string, lname: string, email:string, 
    phone:string, city:string ) : Observable<DocumentReference>{
    return from( this.db.collection('/UserInfo').add({
      firstname: fname, 
      lastname:lname, 
      email:email, 
      phone:phone, 
      city:city,
    })
    );
  }
}
