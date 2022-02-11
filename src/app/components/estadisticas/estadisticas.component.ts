import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Empresa, Persona, Renta, tPersona, tRenta } from 'src/app/models/clientes';
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

  chartOptions: any = {
    chart: 
    {
      backgroundColor: {
        linearGradient: [0, 0, 500, 500],
        stops: [
            [0, 'rgb(192, 193, 192)'],
            [1, 'rgb(217, 217, 217)']
        ]
    },
      type: 'column'
    },
    title: {
      text: 'Ganancias de clientes'
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
    this.obtenerRenta()
  }

  obtenerRenta() {
    this._clientesService.getRenta().subscribe((result: any) => {

      this.listRenta = result.map((renta: any) => {
        return new Renta(renta._id, renta._nombre, renta._renta)
      })

      const dataSeries = this.listRenta.map((x: Renta) => x._renta)
      const dataCategorias = this.listRenta.map((x: Renta) => x._nombre)

      this.chartOptions.series[0]["data"] = dataSeries
      this.chartOptions.xAxis["categories"] = dataCategorias

      Highcharts.chart("renta", this.chartOptions)


    })
  }

}
