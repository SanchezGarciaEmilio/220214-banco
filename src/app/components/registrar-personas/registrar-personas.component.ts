import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tPersona } from 'src/app/models/clientes';

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
    private toastr: ToastrService
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

  crearCliente(){

    const CLIENTE: tPersona = {
      _id: this.clienteForm.get('dni')?.value,
      _tipoObjeto: 'Personal',
      _nombre: this.clienteForm.get('nombre')?.value,
      _telefono: this.clienteForm.get('telefono')?.value,
      _direccion: {numero: this.clienteForm.get('numero')?.value, calle: this.clienteForm.get('calle')?.value},
      _capital: this.clienteForm.get('capital')?.value,
      _ingresos: this.clienteForm.get('ingresos')?.value,
      _comercial: ""
    }

    console.log(CLIENTE)
    this.toastr.success('El cliente fue creado correctamente', 'Cliente creado');
    this.router.navigate(['/clientes/personales'])
    
  }

  

}
