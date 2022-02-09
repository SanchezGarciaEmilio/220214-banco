import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Empresa } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-listar-empresas',
  templateUrl: './listar-empresas.component.html',
  styleUrls: ['./listar-empresas.component.css']
})
export class ListarEmpresasComponent implements OnInit {
  listEmpresas: Empresa[] = []
  buscarForm: FormGroup;

  constructor(private _clientesService: ClienteService, private toastr: ToastrService, private fb: FormBuilder) {
    this.buscarForm = this.fb.group({
      nif: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.listarEmpresas()
  }

  listarEmpresas() {
    let nif = ""
    nif = this.buscarForm.get('nif')?.value

    if (nif == "") {
      this._clientesService.getEmpresa().subscribe(data => {
        this.listEmpresas = data
      })
    } else {
      this._clientesService.obtenerCliente(nif).subscribe(data => {
        this.listEmpresas = data
      })
    }
  }

  eliminarEmpresa(id: any) {
    this.listEmpresas = this.listEmpresas.filter((h) => h._id !== id)
    this._clientesService.eliminarCliente(id).subscribe()
    this.toastr.error('La empresa fue eliminada correctamente', 'Cliente eliminado')
  }

}
