import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Persona, tPersona } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/clientes.service';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  listPersonas: Persona[] = []
  listRentas: any[] = []

  chartOptions: any = {
    chart: {
      backgroundColor: {
        linearGradient: [0, 0, 500, 500],
        stops: [
          [0, 'rgb(192, 193, 192)'],
          [1, 'rgb(217, 217, 217)']
        ]
      },
      type: 'bar',
    },
    title: {
      text: 'Tabla Clasificacin Mundial F1 2021',
    },
    subtitle: {
      text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>',
    },
    yAxis: {
      tickInterval: 5,
      categories: [],
    },
    xAxis: {
      min: 0,
      title: {
        text: 'pilotos',
        align: 'high',
      },
      labels: {
        overflow: 'justify',
      },
    },
    tooltip: {
      valueSuffix: ' millions',
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        type: 'column',
        name: 'Puntos',
        data: [],
        color: 'red',
      },
    ],
    noData: {
      style: {
        fontWeight: 'bold',
        fontSize: '15px',
        color: '#303030',
      },
    },
  };

  constructor(private _clientesService: ClienteService, private _empleadoService: EmpleadosService) { }

  ngOnInit(): void {
    this.getRenta()
  }

  getRenta() {
    this._clientesService.getPersonas().subscribe(data => {
      this.listPersonas = data

      for (var i = 0; i < this.listPersonas.length; i++) {
        this._clientesService.getRenta(this.listPersonas[i]._id).subscribe(data => {
          this.listRentas = data
          console.log(this.listRentas)
        })

      }
    })
  }

}
