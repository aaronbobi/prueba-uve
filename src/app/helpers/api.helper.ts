import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable()

export class ApiHelper {

  urlApi = environment.apiUrl;
  config: any;

  constructor(
    public http: HttpClient
  ) {
  }

  get(endpoint: string) {
    return this.http.get(this.urlApi + '/' + endpoint);
  }
}