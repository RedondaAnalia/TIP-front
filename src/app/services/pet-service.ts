import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';


import 'rxjs/add/operator/map';

import { URL_SERVICIOS } from '../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PetService {

  public pet;
  public pets;

  constructor( public http: HttpClient) { }

  findPetById(id: String) {
    const url = URL_SERVICIOS + 'pets/' + id;
    return this.http.get(url);
  }

  applyVaccine(body, index) {
    const url = URL_SERVICIOS + 'applications';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.put(url, body, httpOptions).map((res: any) => {
                                        this.pet.applications[index].application_date = body.application_date;
                                        return res;
                                        });
  }

}

