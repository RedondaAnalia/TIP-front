import { Injectable } from '@angular/core';
import {URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApplicationService {

  vaccines;

  constructor(private http: HttpClient) { }

  getAllVaccines() {
    const url = URL_SERVICIOS + 'vaccine';
    return this.http.get(url).map((res: any) => res.vaccines);
  }

}
