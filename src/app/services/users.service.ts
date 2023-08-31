import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ApiHelper } from '../helpers/api.helper';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private api: ApiHelper
  ) { }


  getUsers(){
    return this.api.get('users').pipe(
      tap( users => {
        console.log('---USERS---', users); 
      })
    );
  }


}
