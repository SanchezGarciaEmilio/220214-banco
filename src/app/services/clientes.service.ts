import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tPersona } from '../models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = 'https://api-rest-banco.herokuapp.com/clientes'

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<any> {
    return this.http.get(this.url + '/persona')
  }

  eliminarPersonas(id: string): Observable<any> {
    return this.http.delete(this.url + '/eliminar/' + id)
  }

  registrarPersona(persona: tPersona): Observable<any> {
    return this.http.post(this.url + '/registrarPersona', persona)
  }
}
