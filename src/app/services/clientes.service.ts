import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona, tEmpresa, tPersona } from '../models/clientes';
import { tRegistro } from '../models/registro';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = 'https://api-rest-banco.herokuapp.com/clientes'
  urlPrestamo = 'https://api-rest-banco.herokuapp.com/registro'

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<any> {
    return this.http.get(this.url + '/persona')
  }

  getEmpresa(): Observable<any> {
    return this.http.get(this.url + '/empresa')
  }

  eliminarCliente(id: string): Observable<any> {
    return this.http.delete(this.url + '/eliminar/' + id)
  }

  registrarPersona(persona: tPersona): Observable<any> {
    return this.http.post(this.url + '/registrarPersona', persona)
  }

  registrarEmpresa(empresa: tEmpresa): Observable<any> {
    return this.http.post(this.url + '/registrarEmpresa', empresa)
  }

  obtenerCliente(id: string): Observable<any> {
    return this.http.get(this.url + '/' + id)
  }

  editarCliente(id: string, persona: tPersona | tEmpresa): Observable<any> {
    return this.http.put(this.url + '/actualizar/' + id, persona)
  }

  getRenta(): Observable<any> {
    return this.http.get(this.url + '/renta/')
  }

  crearPrestamo(registro: tRegistro): Observable<any> {
    return this.http.post(this.urlPrestamo, registro, {responseType: 'json'})
  }

}
