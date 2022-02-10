import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado, tComercial, tDirectivo, tLimpiador } from '../models/empleados';

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

  registrarDirectivo(directivo: tDirectivo): Observable<any> {
    return this.http.post(this.url + '/registrarDirectivo', directivo)
  }
  registrarComercial(comercial: tComercial): Observable<any> {
    return this.http.post(this.url + '/registrarComercial', comercial)
  }
  registrarLimpiador(limpiador: tLimpiador): Observable<any> {
    return this.http.post(this.url + '/registrarDirectivo', limpiador)
  }
  
  editarEmpleado(id: string, empleado: tComercial | tDirectivo | tLimpiador): Observable<any> {
    return this.http.put(this.url + '/actualizar/' + id, empleado)
  }

}
