import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-petfrom-user',
  templateUrl: './select-petfrom-user.component.html'
})
export class SelectPetfromUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  irAPerfil() {
    console.log('Voy a perfil de Clara');  }
}
