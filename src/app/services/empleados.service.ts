import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tComercial, tDirectivo, tLimpiador } from '../models/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  url = 'https://api-rest-banco.herokuapp.com/empleados'

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<any> {
    return this.http.get(this.url)
  }
  getDirectivos(): Observable<any> {
    return this.http.get(this.url + '/directivo')
  }
  getComerciales(): Observable<any> {
    return this.http.get(this.url + '/comercial')
  }
  getLimpiadores(): Observable<any> {
    return this.http.get(this.url + '/limpiador')
  }

  obtenerEmpleado(id: string): Observable<any> {
    return this.http.get(this.url + '/' + id)
  }

  eliminarEmpleado(id: string): Observable<any> {
    return this.http.delete(this.url + '/eliminar/' + id)
  }
}
