import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../../services/pet-service';

@Component({
  selector: 'app-find-pet',
  templateUrl: './find-pet.component.html',
})
export class FindPetComponent implements OnInit {

  input;

  constructor(
    private router: Router,
    private _petService: PetService
  ) { }

  ngOnInit() {
  }

  find() {
    this._petService.findPetById(this.input).subscribe( (res) => {
      this._petService.res = res;
      console.log(res);
      this.router.navigate(['/petProfile']);
    });
  }

}
