import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-pet',
  templateUrl: './find-pet.component.html',
})
export class FindPetComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

  find(id) {
    this.router.navigate(['/petProfile']);
  }

}
