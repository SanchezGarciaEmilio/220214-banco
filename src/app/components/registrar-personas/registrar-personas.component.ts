import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona, tPersona } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-registrar-personas',
  templateUrl: './registrar-personas.component.html',
  styleUrls: ['./registrar-personas.component.css']
})
export class RegistrarPersonasComponent implements OnInit {
  titulo = 'Registrar cliente'
  clienteForm: FormGroup;
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService,
    private _clienteService: ClienteService
  ) {
    this.clienteForm = this.fb.group({
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      numero: ['', Validators.required],
      calle: ['', Validators.required],
      capital: ['', Validators.required],
      ingresos: ['', Validators.required],
      comercial: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.editarPersona()
  }

  crearPersona() {

    const CLIENTE: tPersona = {
      id: this.clienteForm.get('dni')?.value,
      nombre: this.clienteForm.get('nombre')?.value,
      telefono: this.clienteForm.get('telefono')?.value,
      numero: this.clienteForm.get('numero')?.value,
      calle: this.clienteForm.get('calle')?.value,
      capital: this.clienteForm.get('capital')?.value,
      ingresos: this.clienteForm.get('ingresos')?.value,
      comercial: this.clienteForm.get('comercial')?.value,
    }

    if (this.id !== null) {
      this._clienteService.editarCliente(this.id, CLIENTE).subscribe()
      this.toastr.info('El cliente fue actualizado correctamente', 'Cliente actualizado');
    } else {
      this._clienteService.registrarPersona(CLIENTE).subscribe()
      this.toastr.success('El cliente fue creado correctamente', 'Cliente creado');
      this.clienteForm.reset()
    }
  }

  editarPersona() {

    if (this.id !== null) {
      this.titulo = "Editar cliente"
      this._clienteService.obtenerCliente(this.id).subscribe(data => {
        this.clienteForm.setValue({
          dni: data[0]._id,
          nombre: data[0]._nombre,
          telefono: data[0]._telefono,
          numero: data[0]._direccion.numero,
          calle: data[0]._direccion.calle,
          capital: data[0]._capital,
          ingresos: data[0]._ingresos,
          comercial: data[0]._comercial,
        })
      })
    }

  }

}
