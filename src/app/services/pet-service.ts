import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import 'rxjs/add/operator/map';

import { URL_SERVICIOS } from '../../config/config';

@Injectable()
export class PetService {

  public pet;

  constructor( public http: HttpClient) { }

  findPetById(id: String) {
    const url = URL_SERVICIOS + 'pets/' + id;
    return this.http.get(url);
  }

}

