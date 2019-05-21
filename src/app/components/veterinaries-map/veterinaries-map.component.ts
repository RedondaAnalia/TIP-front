import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veterinaries-map',
  templateUrl: './veterinaries-map.component.html'
})
export class VeterinariesMapComponent implements OnInit {

  latitude = -28.68352;
  longitude = -147.20785;

  constructor() { }

  ngOnInit() {
  }

}
