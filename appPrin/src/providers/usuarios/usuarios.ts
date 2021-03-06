import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UsuariosProvider Provider');
  }
  load(){
    return this.http.get('http://localhost:3000/participantes');
  }

}
