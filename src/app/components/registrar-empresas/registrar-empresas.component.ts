import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Empresa, tEmpresa } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-registrar-empresas',
  templateUrl: './registrar-empresas.component.html',
  styleUrls: ['./registrar-empresas.component.css']
})
export class RegistrarEmpresasComponent implements OnInit {
  titulo = 'Registrar empresa'
  clienteForm: FormGroup;
  id: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService,
    private _clienteService: ClienteService) {
    this.clienteForm = this.fb.group({
      nif: ['', Validators.required],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      numero: ['', Validators.required],
      calle: ['', Validators.required],
      capital: ['', Validators.required],
      ingresos: ['', Validators.required],
      plan: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.editarEmpresa()
  }

  crearEmpresa() {

    const EMPRESA: tEmpresa = {
      id: this.clienteForm.get('nif')?.value,
      nombre: this.clienteForm.get('nombre')?.value,
      telefono: this.clienteForm.get('telefono')?.value,
      numero: this.clienteForm.get('numero')?.value,
      calle: this.clienteForm.get('calle')?.value,
      capital: this.clienteForm.get('capital')?.value,
      ingresos: this.clienteForm.get('ingresos')?.value,
      plan: this.clienteForm.get('plan')?.value,
    }

    if (this.id !== null) {
      this._clienteService.editarCliente(this.id, EMPRESA).subscribe()
      this.toastr.info('La empresa fue actualizada correctamente', 'Cliente actualizado');
    } else {
      this._clienteService.registrarEmpresa(EMPRESA).subscribe()
      this.toastr.success('La empresa fue creada correctamente', 'Cliente creado');
      this.clienteForm.reset()
    }
  }

  editarEmpresa() {

    console.log(this.id)

    if (this.id !== null) {
      this.titulo = "Editar empresa"
      this._clienteService.obtenerCliente(this.id).subscribe(data => {
        this.clienteForm.setValue({
          nif: data[0]._id,
          nombre: data[0]._nombre,
          telefono: data[0]._telefono,
          numero: data[0]._direccion.numero,
          calle: data[0]._direccion.calle,
          capital: data[0]._capital,
          ingresos: data[0]._ingresos,
          plan: data[0]._plan,
        })
      })
    }

  }


}
