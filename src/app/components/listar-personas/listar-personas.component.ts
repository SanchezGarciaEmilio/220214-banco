import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})
export class ListarPersonasComponent implements OnInit {
  listPersonas: Persona[] = []
  buscarForm: FormGroup;


  constructor(private _clientesService: ClienteService, private toastr: ToastrService, private fb: FormBuilder,) {
    this.buscarForm = this.fb.group({
      dni: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.listarPersonas()
  }

  listarPersonas() {
    let dni = ""
    dni = this.buscarForm.get('dni')?.value

    if (dni == "") {
      this._clientesService.getPersonas().subscribe(data => {
        this.listPersonas = data
      })
    } else {
      this._clientesService.obtenerCliente(dni).subscribe(data => {
        this.listPersonas = data
      })
    }
  }

  eliminarPersona(id: any) {
    this.listPersonas = this.listPersonas.filter((h) => h._id !== id)
    this._clientesService.eliminarCliente(id).subscribe()
    this.toastr.error('El cliente fue eliminado correctamente', 'Cliente eliminado')
  }


}
