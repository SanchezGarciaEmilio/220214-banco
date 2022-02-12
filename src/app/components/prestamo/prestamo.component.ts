import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Registro, tRegistro } from 'src/app/models/registro';
import { ClienteService } from 'src/app/services/clientes.service';
@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent implements OnInit {
  prestamoForm: FormGroup
  idCliente: string = ""
  capital: number = 0
  listPrestamos: Registro[] = []

  constructor(private fb: FormBuilder, private _clientesService: ClienteService, private toastr: ToastrService) {
    this.prestamoForm = this.fb.group({
      idCliente: ['', Validators.required],
      idEmpleado: ['', Validators.required],
      prestamo: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.listarPrestamos()
  }

  crearPrestamo() {

    this.idCliente = this.prestamoForm.get('idCliente')?.value

    this._clientesService.obtenerCliente(this.idCliente).subscribe(data => {
      this.capital = data[0]._ingresos

      const PRESTAMO: tRegistro = {
        idComercial: this.prestamoForm.get('idEmpleado')?.value,
        idCliente: this.prestamoForm.get('idCliente')?.value,
        prestamo: this.prestamoForm.get('prestamo')?.value,
        capitalCliente: this.capital
      }
      console.log(PRESTAMO)
      this._clientesService.crearPrestamo(PRESTAMO).subscribe()
      this.toastr.success('El prestamo fue creada correctamente', 'Prestamo creado');
      this.prestamoForm.reset()

    })
  }

  listarPrestamos() {
    this._clientesService.getPrestamos().subscribe(data => {
      this.listPrestamos = data
    })
  }

}
