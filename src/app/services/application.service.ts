import { Injectable } from '@angular/core';
import {URL_SERVICIOS } from '../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PetService } from './pet-service';
import { UserService } from './user.service';

@Injectable()
export class ApplicationService {

  vaccines;

  constructor(private http: HttpClient, private _petService: PetService, private _userService: UserService) { }

  getAllVaccines() {
    const url = URL_SERVICIOS + 'vaccine';
    return this.http.get(url).map((res: any) => res.vaccines);
  }

  postVaccine(vaccine_id, estimated_date) {
    const url = URL_SERVICIOS + 'pets/application?token=' + this._userService.userToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    const body = {
      'pet_id' : this._petService.pet._id,
      'vaccine_id': vaccine_id,
      'estimated_date': estimated_date,
      'email': this._userService.userLogged.email
    };

    return this.http.post(url, body, httpOptions).map((res: any) => {
                                        this._petService.pet = res.pet;
                                        });
  }
}
