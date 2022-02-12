import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Cliente, Empresa, Persona, Renta, tPersona, tPersona2, tRenta } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/clientes.service';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  listRenta: Renta[] = []
  listPersonas: tPersona2[] = []
  arrayRenta: tRenta[] = []

  chartOptions: any = {
    chart: 
    {
      backgroundColor: {
        linearGradient: [500, 500, 500, 500],
        stops: [
            [0, 'rgb(255, 255, 255)'],
        ]
    },
      type: 'column'
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: []
    },
    credits: {
      enabled: false
    },
    series: [{
      name: '',
      data: []
    }]
  };

  constructor(private _clientesService: ClienteService, private _empleadoService: EmpleadosService) { }

  ngOnInit(): void {
    this.obtenerRentaEmpresa()
  }

  obtenerRentaEmpresa() {
    this._clientesService.getRenta().subscribe((result: any) => {

      this.listRenta = result.map((renta: any) => {
        return new Renta(renta._id, renta._nombre, renta._renta)
      })

      const dataSeries = this.listRenta.map((x: Renta) => x._renta)
      const dataCategorias = this.listRenta.map((x: Renta) => x._nombre)

      this.chartOptions.title["text"] = "Ganancias de clientes empresariales"
      this.chartOptions.series[0]["data"] = dataSeries
      this.chartOptions.xAxis["categories"] = dataCategorias
      this.chartOptions.series["name"] = "Empresas"

      Highcharts.chart("renta", this.chartOptions)
    })
  }

  obtenerRentaPersona() {
    this._clientesService.getPersonas().subscribe((data) => {
      let dCliente: tPersona2
      let tmpCliente: Cliente
      let renta: number

      this.listPersonas = data
      for (dCliente of this.listPersonas) {
        tmpCliente = new Persona(dCliente._id,
          dCliente._nombre,
          dCliente._telefono,
          dCliente._direccion,
          dCliente._capital,
          dCliente._ingresos,
          dCliente._comercial)

          renta = tmpCliente.renta()
          let dRenta: tRenta = {
            _id: null,
            _nombre: null,
            _renta: null
          }
          dRenta._id = tmpCliente._id
          dRenta._nombre = tmpCliente._nombre
          dRenta._renta = renta
          this.arrayRenta.push(dRenta)
      }
      this.listRenta = this.arrayRenta.map((renta: any) => {
        return new Renta(renta._id, renta._nombre, renta._renta)
      })

      const dataSeries = this.listRenta.map((x: Renta) => x._renta)
      const dataCategorias = this.listRenta.map((x: Renta) => x._nombre)

      this.chartOptions.title["text"] = "Ganancias de clientes personales"
      this.chartOptions.series[0]["data"] = dataSeries
      this.chartOptions.xAxis["categories"] = dataCategorias
      this.chartOptions.series["name"] = "Personas"

      Highcharts.chart("renta", this.chartOptions)

    })
  }

  

}
