import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from "../interfaces/user";
import{ AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { UserInfoService } from './user-info.service';
import { getuid, setuid } from 'process';
import { stringify } from 'querystring';
import { from } from 'rxjs';
import { IdStorageService } from './id-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthserviceService {
  user: User;
  userInfo: UserInfoService;
  currentUser: any;
  
  constructor( 
    public afs: AngularFirestore, 
    public afAuth: AngularFireAuth, 
    public idstorage: IdStorageService,
    public router:Router) {
      this.afAuth.authState.subscribe(user => {
        if (user){
          this.user = user;
          localStorage.setItem('user', JSON.stringify(this.user));
        } else {
          localStorage.setItem('user', null);
        }
    })
   }

  async login(email: string, password: string) {
  var result = await this.afAuth.signInWithEmailAndPassword(email, password)
  this.router.navigate(['profile-info']);
  let uid = (await this.afAuth.currentUser).uid
  this.idstorage.setUid(uid)
  }

  
  async register(email: string, password: string, fname:string,
     lname: string, phone:string, city:string) {
    var result = await this.afAuth.createUserWithEmailAndPassword(email, password)
    let uid = (await this.afAuth.currentUser).uid
    this.idstorage.setUid(uid)
    this.sendEmailVerification()
    return from( this.afs.collection('/UserInfo').doc(uid).set({
      firstname: fname, 
      lastname:lname, 
      email:email, 
      phone:phone, 
      city:city,
    }))
  }

  async sendEmailVerification() {
    await (await this.afAuth.currentUser).sendEmailVerification()
    this.router.navigate(['profile-info']);
  }
  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
 }

  async logout(){
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['admin/login']);
  }

  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  }

}
