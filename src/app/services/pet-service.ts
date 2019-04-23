import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';


import 'rxjs/add/operator/map';

import { URL_SERVICIOS } from '../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable()
export class PetService {

  public pet;
  public pets;

  constructor( public http: HttpClient, private _userService: UserService) { }

  findPetById(id: String) {
    const url = URL_SERVICIOS + 'pets/' + id;
    return this.http.get(url);
  }

  applyVaccine(applicationId, date, index) {
    const url = URL_SERVICIOS + 'applications?token=' + this._userService.userToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const body = {
      application_id: applicationId,
      application_date: date,
      email: this._userService.userLogged.email
    };

    return this.http.put(url, body, httpOptions).map((res: any) => {
                                        this.pet.applications[index].application_date = body.application_date;
                                        return res;
                                        });
  }

}

