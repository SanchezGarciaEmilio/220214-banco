import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona, tPersona } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-registrar-personas',
  templateUrl: './registrar-personas.component.html',
  styleUrls: ['./registrar-personas.component.css']
})
export class RegistrarPersonasComponent implements OnInit {

  clienteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
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
    })
  }

  ngOnInit(): void {
  }

  crearCliente() {

    const CLIENTE: tPersona = {
      id: this.clienteForm.get('dni')?.value,
      nombre: this.clienteForm.get('nombre')?.value,
      telefono: this.clienteForm.get('telefono')?.value,
      numero: this.clienteForm.get('numero')?.value,
      calle: this.clienteForm.get('calle')?.value,
      capital: this.clienteForm.get('capital')?.value,
      ingresos: this.clienteForm.get('ingresos')?.value,
    }
    console.log(CLIENTE)

    this._clienteService.registrarPersona(CLIENTE).subscribe()
    this.toastr.success('El cliente fue creado correctamente', 'Cliente creado');
    this.clienteForm.reset()
  }

}
