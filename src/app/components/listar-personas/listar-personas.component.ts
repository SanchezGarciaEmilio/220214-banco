import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Empresa, Persona } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})
export class ListarPersonasComponent implements OnInit {
  listPersonas: Persona[] = []

  constructor(private _clientesService: ClienteService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.listarPersonas()
  }

  listarPersonas() {
    this._clientesService.getPersonas().subscribe(data => {
      this.listPersonas = data
    })
  }

  eliminarPersona(id: any) {
    this.listPersonas = this.listPersonas.filter((h) => h._id !== id)
    this._clientesService.eliminarPersonas(id).subscribe()
    this.toastr.error('El cliente fue eliminado correctamente', 'Cliente eliminado')
  }


}
