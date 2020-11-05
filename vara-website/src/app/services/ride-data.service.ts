import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RideData } from '../interfaces/ride-data';
import { IdStorageService } from './id-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RideDataService {

  constructor(public db: AngularFirestore,
    private idStore: IdStorageService) { }

  getRideByDriverId(): Observable<RideData []> {
		return this.db.collection('/rideCapture', ref => ref.where('driverId', '==', this.idStore.getUId()
		))
			.snapshotChanges().pipe(
				map(action => {
					return action.map(res => {
						const ride = res.payload.doc.data() as RideData;
						const id = res.payload.doc.id;
						return { id, ...ride };
					})
				})
			);
	} 
}
