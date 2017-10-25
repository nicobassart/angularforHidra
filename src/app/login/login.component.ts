import {Component, OnInit} from '@angular/core';
// import {Http, Response, HttpHeaders, RequestOptions, RequestOptionsArgs} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {collapseTextChangeRangesAcrossMultipleVersions} from 'typescript';
import {UserResponse} from './userresponse';
import {IUserResponse} from './iuserresponse';

import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { RequestOptions, RequestOptionsArgs } from '@angular/http';
import { SeguridadService } from '../servicios/seguridad.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ SeguridadService ]
})

export class LoginComponent implements OnInit {
  handleError: any;
  cityName = '';
  respuesta = 'Sin Valor';

  constructor(private http: HttpClient, private seguridadSrv: SeguridadService ) {}


  searhCity() {
    this.seguridadSrv.invokePost();
//    this.postLogin();
//    this.postLogin().subscribe(
//      data => console.log(data),
//      err => console.log(err));

  }


//  postLogin(values: string): Observable<string> {
//    const body = 'username=test@test.test&password=Test1234!&grant_type=password';
//    /*let body = values + "&grant_type=password";*/
//    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
//    const options = new RequestOptions({headers: headers});
//
//    return this.http.post('http://localhost:8081/login', body, options).catch(this.handleError);
//  }

  postLogin() {
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

//    // Formulario de login
//    this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(data => {
//      console.log(' User Login: ' + data.login);
//      console.log(' Bio: ' + data.bio);
//      console.log(' Company: ' + data.company);
//    });


    // this.http.get('http://localhost:8081/login').
    //  subscribe(
    //  (res: Response) => {
    //    const watherCity = res.json();
    //    console.log(watherCity.main.humidity);
    //    this.respuesta = watherCity.main.humidity;
    //  });
  }
  ngOnInit() {
  }

}
