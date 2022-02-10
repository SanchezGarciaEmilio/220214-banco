import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Directivo, Limpiador, Comercial, tComercial, tDirectivo, tLimpiador } from 'src/app/models/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {
  listEmpleado: any[] = []
  buscarForm: FormGroup;
  titulo = ''

  constructor(private _empleadoService: EmpleadosService, private toastr: ToastrService, private fb: FormBuilder) {
    this.buscarForm = this.fb.group({
      dni: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.listarDirectivos()
  }

  listarDirectivos() {
    let dni = ""
    dni = this.buscarForm.get('dni')?.value
    this.titulo = "Nivel"

    if (dni == "") {
      this._empleadoService.getDirectivos().subscribe(data => {
        this.listEmpleado = data
        this.toastr.info('Directivos fue listado correctamente', 'Directivos')
      })
    } else {
      this._empleadoService.obtenerEmpleado(dni).subscribe(data => {
        this.listEmpleado = data
      })
    }
  }

  listarComerciales() {
    let dni = ""
    dni = this.buscarForm.get('dni')?.value
    this.titulo = "Horas"

    if (dni == "") {
      this._empleadoService.getComerciales().subscribe(data => {
        this.listEmpleado = data
        this.toastr.info('Comerciales fue listado correctamente', 'Comerciales')
      })
    } else {
      this._empleadoService.obtenerEmpleado(dni).subscribe(data => {
        this.listEmpleado = data
      })
    }
  }

  listarLimpiadores() {
    let dni = ""
    dni = this.buscarForm.get('dni')?.value
    this.titulo = "Empresa"

    if (dni == "") {
      this._empleadoService.getLimpiadores().subscribe(data => {
        this.listEmpleado = data
        this.toastr.info('Limpiadores fue listado correctamente', 'Limpiadores')
      })
    } else {
      this._empleadoService.obtenerEmpleado(dni).subscribe(data => {
        this.listEmpleado = data
      })
    }
  }

  eliminarEmpleado(id: any) {
    this.listEmpleado = this.listEmpleado.filter((h) => h.id !== id)
    this._empleadoService.eliminarEmpleado(id).subscribe()
    this.toastr.error('El empleado fue eliminado correctamente', 'Empleado eliminado')
  }


}
