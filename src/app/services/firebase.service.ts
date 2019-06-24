import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {

  private basePath = '/pets';
  constructor(private db: AngularFireDatabase) { }

  getPets(path): Observable<Pet> {
    return this.db.object<Pet>(path).valueChanges();
  }
}

export class Pet {
  location: Location;
}

export class Location {
  alt: string;
  lat: string;
}
