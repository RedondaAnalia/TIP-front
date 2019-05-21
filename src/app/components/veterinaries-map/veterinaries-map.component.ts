import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veterinaries-map',
  templateUrl: './veterinaries-map.component.html'
})
export class VeterinariesMapComponent implements OnInit {

  lat = -34.603418;
  lng = -58.381592;
  zoom = 15;

   // Geolocalizacion
   options = {
    enableHighAccuracy: true,
    maximumAge: 0
  };

  constructor() {
    navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
  }

  ngOnInit() {
  }

  private success = (pos) => {
    const crd = pos.coords;
    this.lat = crd.latitude;
    this.lng = crd.longitude;
    console.log(this.lat);
    console.log(this.lng);
  }


  private error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  }

}
