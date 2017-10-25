import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { RequestOptions, RequestOptionsArgs } from '@angular/http';
import {IUserResponse} from '../login/iuserresponse';
import {Observable} from 'rxjs/Rx';

import { Injectable } from '@angular/core';

@Injectable()
export class SeguridadService {

  constructor(private http: HttpClient ) { }

  invokePost(): void {
    const input = new  IUserResponse();
    input.password = 'prueba';
    input.username = 'vamos';

    const headers = new HttpHeaders();
    // headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.set('Access-Control-Allow-Headers', 'Authorization, Content-Type, Accept, x-requested-with, Cache-Control');
    headers.set('Content-Type', 'application/json');


    this.http.post('http://localhost:8081/loginAngular',
       JSON.stringify({user: 'sdasd', password: 'dasdasd', estado: 'dasdasd', idUsuario: 1, resultado: 'asdasd'}) ,
      {headers: new HttpHeaders().set('Content-Type', 'application/json')}).subscribe(data => {
      console.log(' Data: ' + data);

    });
    console.log( 'dasda' );
  }
}
