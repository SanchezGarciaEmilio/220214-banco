import { Component, OnInit } from '@angular/core';
import { Empresa, Persona } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})
export class ListarPersonasComponent implements OnInit {
  listPersonas: Persona[] = []

  constructor(private _clientesService: ClienteService) { }

  ngOnInit(): void {
    this.listarPersonas()
  }

  listarPersonas() {
    this._clientesService.getPersonas().subscribe(data => {
      this.listPersonas = data
    })
  }

}
