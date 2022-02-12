import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { HomeComponent } from './components/home/home.component';
import { ListarEmpleadosComponent } from './components/listar-empleados/listar-empleados.component';
import { ListarEmpresasComponent } from './components/listar-empresas/listar-empresas.component';
import { ListarPersonasComponent } from './components/listar-personas/listar-personas.component';
import { LoginComponent } from './components/login/login.component';
import { PrestamoComponent } from './components/prestamo/prestamo.component';
import { RegistrarEmpresasComponent } from './components/registrar-empresas/registrar-empresas.component';
import { RegistrarPersonasComponent } from './components/registrar-personas/registrar-personas.component';

const routes: Routes = [
  { path: 'clientes/personales', component: ListarPersonasComponent},
  { path: 'clientes/empresariales', component: ListarEmpresasComponent},
  { path: 'clientes/personales/registrar', component: RegistrarPersonasComponent},
  { path: 'clientes/personales/registrar/:id', component: RegistrarPersonasComponent},
  { path: 'clientes/empresariales/registrar', component: RegistrarEmpresasComponent},
  { path: 'clientes/empresariales/registrar/:id', component: RegistrarEmpresasComponent},
  { path: 'empleados', component: ListarEmpleadosComponent},
  { path: 'estadisticas', component: EstadisticasComponent},
  { path: 'prestamo', component: PrestamoComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
