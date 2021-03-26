import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Tour } from '../wycieczki/tour';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  daneRef: Observable<any[]>;
 
  constructor(private db: AngularFireDatabase) {
  }

  createTour(tour: Tour): void {
    var booked = 0;
    const daneRef = this.db.list('tours');
    daneRef.push({name : tour.name,
      country : tour.country,
      startDate : tour.startDate,
      endDate: tour.endDate,
      price : tour.price,
      maxParticipants: tour.maxParticipants,
      description : tour.description,
      image : tour.image,
      available : tour.maxParticipants,
      booked : booked,
    });
  }

  updateBooked(key: string, value: number) {
    const daneRef = this.db.list('tours');
    daneRef.update(key, { "booked": value}); 
  }

  updateAvailable(key: string, value: number) {
    const daneRef = this.db.list('tours');
    daneRef.update(key, { "available": value}); 
  }

  deleteTour(key: string) {
    const daneRef = this.db.list('tours');
    daneRef.remove(key);
  }

  getToursList()  {
    return this.db.list('tours').snapshotChanges();
  }
    
}