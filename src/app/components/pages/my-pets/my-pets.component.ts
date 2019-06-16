import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewPetComponent } from '../../new-pet/new-pet.component';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html'
})
export class MyPetsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}
