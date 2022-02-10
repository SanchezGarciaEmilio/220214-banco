// Modulos
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';

// Componentes
import { ListarPersonasComponent } from './components/listar-personas/listar-personas.component';
import { ListarEmpresasComponent } from './components/listar-empresas/listar-empresas.component';
import { RegistrarPersonasComponent } from './components/registrar-personas/registrar-personas.component';
import { RegistrarEmpresasComponent } from './components/registrar-empresas/registrar-empresas.component';
import { ListarEmpleadosComponent } from './components/listar-empleados/listar-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPersonasComponent,
    ListarEmpresasComponent,
    RegistrarPersonasComponent,
    RegistrarEmpresasComponent,
    ListarEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
