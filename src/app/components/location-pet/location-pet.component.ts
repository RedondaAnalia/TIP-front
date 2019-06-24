import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import {FirebaseService} from '../../services/firebase.service';
import {Observable} from 'rxjs/Observable';
import {PetService} from '../../services/pet-service';



declare var google: any;
@Component({
  selector: 'app-location-pet',
  templateUrl: './location-pet.component.html'
})
export class LocationPetComponent implements OnInit {

  lat: number;
  lng: number;
  zoom = 15;
  markers = [];
  pets: Observable<any[]>;
  pet;

  constructor(private mapsAPILoader: MapsAPILoader, private fireService: FirebaseService, private _petService: PetService ) { }
  ngOnInit() {
    this.pet = this._petService.pet;
    this.mapsAPILoader.load().then(() => {
      this.getUserLocation();
    });
  }


  private getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.getPetUbication();
      });
    }
  }

  private getPetUbication() {
    if (!this.lat || !this.lng) {

      return;
    }
    const myLatLng = new google.maps.LatLng(this.lat, this.lng);
    console.log(this.lat);
    console.log(this.lng);
    const map = new google.maps.Map( document.getElementById('map'));
    this.fireService.getPets('/pets/' + 'aa3432dde').subscribe(petRequest => {
      const res = [];
      res.push({
          lat: +petRequest.location.lat ,
          lng: +petRequest.location.long,
          name: this.pet.name,
          photo: this.pet.image
        }
      );
      this.markers = res;
      console.log(this.markers);
    });
  }

  private success = (pos) => {
    const crd = pos.coords;
    this.lat = crd.latitude;
    this.lng = crd.longitude;
    this.ngOnInit();

  }

  private error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  }


}
