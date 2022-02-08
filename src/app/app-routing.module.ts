import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEmpleadosComponent } from './components/listar-empleados/listar-empleados.component';
import { ListarEmpresasComponent } from './components/listar-empresas/listar-empresas.component';
import { ListarPersonasComponent } from './components/listar-personas/listar-personas.component';
import { RegistrarEmpleadosComponent } from './components/registrar-empleados/registrar-empleados.component';
import { RegistrarEmpresasComponent } from './components/registrar-empresas/registrar-empresas.component';
import { RegistrarPersonasComponent } from './components/registrar-personas/registrar-personas.component';

const routes: Routes = [
  { path: 'clientes/personales', component: ListarPersonasComponent},
  { path: 'clientes/empresariales', component: ListarEmpresasComponent},
  { path: 'clientes/personales/registrar', component: RegistrarPersonasComponent},
  { path: 'clientes/personales/registrar/:id', component: RegistrarPersonasComponent},
  { path: 'clientes/empresariales/registrar', component: RegistrarEmpresasComponent},
  { path: 'empleados', component: ListarEmpleadosComponent},
  { path: 'empleados/registrar', component: RegistrarEmpleadosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
