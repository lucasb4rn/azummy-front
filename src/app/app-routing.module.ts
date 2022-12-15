import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { HomeComponent } from './components/views/home/home.component';

import { ProfissionalReadComponent } from './components/views/profissional/profissional-read/profissional-read.component';
import { ProfissionalCreateComponent } from './components/views/profissional/profissional-create/profissional-create.component';
import { ProfissionalDeleteComponent } from './components/views/profissional/profissional-delete/profissional-delete.component';
import { ProfissionalUpdateComponent } from './components/views/profissional/profissional-update/profissional-update.component';

import { ColaboradorReadComponent } from './components/views/colaborador/colaborador-read/colaborador-read.component';
import { ColaboradorCreateComponent } from './components/views/colaborador/colaborador-create/colaborador-create.component';
import { ColaboradorDeleteComponent } from './components/views/colaborador/colaborador-delete/colaborador-delete.component';
import { ColaboradorUpdateComponent } from './components/views/colaborador/colaborador-update/colaborador-update.component';

import { UsuarioCreateComponent } from './components/views/usuario/usuario-create/usuario-create.component';
import { UsuarioReadComponent } from './components/views/usuario/usuario-read/usuario-read.component';
import { UsuarioDeleteComponent } from './components/views/usuario/usuario-delete/usuario-delete.component';
import { UsuarioUpdateComponent } from './components/views/usuario/usuario-update/usuario-update.component';

import { PacienteReadComponent } from './components/views/paciente/paciente-read/paciente-read.component';
import { PacienteCreateComponent } from './components/views/paciente/paciente-create/paciente-create.component';
import { PacienteDeleteComponent } from './components/views/paciente/paciente-delete/paciente-delete.component';
import { PacienteUpdateComponent } from './components/views/paciente/paciente-update/paciente-update.component';

import { AvaliacaoReadComponent } from './components/views/avaliacao/avaliacao-read/avaliacao-read.component';

import { NavComponent } from './components/template/nav/nav.component';
import { LoginComponent } from './components/views/login/login.component';
import { AvaliacaoCreateComponent } from './components/views/avaliacao/avaliacao-create/avaliacao-create.component';
import { AvaliacaoDeleteComponent } from './components/views/avaliacao/avaliacao-delete/avaliacao-delete.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent },
      {
        path:'usuario',
        component: UsuarioReadComponent
      },
      {
        path:'usuario/create',
        component: UsuarioCreateComponent
      },
      {
        path:'usuario/delete/:id',
        component: UsuarioDeleteComponent
      },
      {
        path:'usuario/update/:id',
        component: UsuarioUpdateComponent
      },
      {
        path:'colaborador',
        component: ColaboradorReadComponent
      },
      {
        path:'colaborador/create',
        component: ColaboradorCreateComponent
      },
      {
        path:'colaborador/delete/:id',
        component: ColaboradorDeleteComponent
      },
      {
        path:'colaborador/update/:id',
        component: ColaboradorUpdateComponent
      },
      {
        path:'paciente',
        component: PacienteReadComponent
      },
      {
        path:'paciente/create',
        component: PacienteCreateComponent
      },
      {
        path:'paciente/delete/:id',
        component: PacienteDeleteComponent
      },
      {
        path:'paciente/update/:id',
        component: PacienteUpdateComponent
      },
      {
        path:'profissional',
        component: ProfissionalReadComponent
      },
      {
        path:'profissional/create',
        component: ProfissionalCreateComponent
      },
      {
        path:'profissional/delete/:id',
        component: ProfissionalDeleteComponent
      },
      {
        path:'profissional/update/:id',
        component: ProfissionalUpdateComponent
      },
      {
        path:'avaliacao',
        component: AvaliacaoReadComponent
      },
      {
        path:'avaliacao/create',
        component: AvaliacaoCreateComponent
      },
      {
        path:'avaliacao/delete/:id',
        component: AvaliacaoDeleteComponent
      },
      
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
