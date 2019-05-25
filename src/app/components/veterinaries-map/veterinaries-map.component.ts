import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { createScope } from '@angular/core/src/profile/wtf_impl';


declare var google: any;
@Component({
  selector: 'app-veterinaries-map',
  templateUrl: './veterinaries-map.component.html'
})

export class VeterinariesMapComponent implements OnInit {

  lat ;
  lng ;
  zoom = 15;
  markers = [];

   // Geolocalizacion
   options = {
    enableHighAccuracy: true,
    maximumAge: 0
  };

  constructor( private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {
    navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
  }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      if (!this.lat || !this.lng) {
        return;
      }
    const myLatLng = new google.maps.LatLng(this.lat, this.lng);
    console.log(this.lat);
    console.log(this.lng);

    const map = new google.maps.Map( document.getElementById('map'));
    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
                        location: myLatLng,
                        radius: '2000',
                        keyword: 'veterinaria',
                        types: ['veterinary_care']
                        }, (results, status)  => {
                          console.log(myLatLng);
                                        const res = [];
                                        if (status === google.maps.places.PlacesServiceStatus.OK) {
                                          for (let i = 0; i < results.length; i++) {
                                            res.push({
                                              lat: results[i].geometry.location.lat(),
                                              lng: results[i].geometry.location.lng(),
                                              address: results[i].vicinity,
                                              name: results[i].name,
                                              rating: results[i].rating,
                                              votes: results[i].user_ratings_total,
                                              open_now: results[i].opening_hours
                                            });
                                          }
                                        this.markers = res;
                                        console.log(this.markers);
                                        }
                            });
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
