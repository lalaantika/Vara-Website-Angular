import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdStorageService {

  constructor() { }
  setUid(Uid: string) {
		sessionStorage.setItem('uid', Uid);
  }
  
  getUId(): string {
		return sessionStorage.getItem('uid');
	}

}
