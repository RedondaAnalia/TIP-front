import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URL_SERVICIOS } from '../../config/config';

@Injectable()
export class PetService {

  public res;

  constructor( public http: HttpClient) { }

  findPetById(id: String) {
    const url = URL_SERVICIOS + 'pets/' + id;
    console.log(url);

    return this.http.get(url);
  }

}
