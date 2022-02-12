// Modulos
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';

// Componentes
import { ListarPersonasComponent } from './components/listar-personas/listar-personas.component';
import { ListarEmpresasComponent } from './components/listar-empresas/listar-empresas.component';
import { RegistrarPersonasComponent } from './components/registrar-personas/registrar-personas.component';
import { RegistrarEmpresasComponent } from './components/registrar-empresas/registrar-empresas.component';
import { ListarEmpleadosComponent } from './components/listar-empleados/listar-empleados.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { PrestamoComponent } from './components/prestamo/prestamo.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ListarPersonasComponent,
    ListarEmpresasComponent,
    RegistrarPersonasComponent,
    RegistrarEmpresasComponent,
    ListarEmpleadosComponent,
    EstadisticasComponent,
    PrestamoComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    HighchartsChartModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
