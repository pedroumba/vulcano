import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiserviceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiserviceProvider Provider');
  }

  apiUrl = 'https://apitestpumba.herokuapp.com/reports'

  getReports() {

    console.log('GET: ' + this.apiUrl );
    return this.http.get( this.apiUrl )     
  }

  addReport(params) {

    let p = new HttpParams()
        .set('usuario',   params.usuario)
        .set('foto',      params.foto)
        .set('direccion', params.direccion)
        // .set('latitud',   params.latitud)
        // .set('longitud',  params.longitud)
        .set('reporte',   params.reporte);

    console.log('POST: ' + this.apiUrl + '?' + p.toString());

    return this.http.post( this.apiUrl, '', {
        // headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
        params: p
      })

  }

}
