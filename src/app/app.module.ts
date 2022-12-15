import { AvaliacaoCreateComponent } from './components/views/avaliacao/avaliacao-create/avaliacao-create.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';


import { NavComponent } from './components/template/nav/nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/views/home/home.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { LoginComponent } from './components/views/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { NgxMaskModule } from 'ngx-mask';


// Componentes do projeto
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProfissionalUpdateComponent } from './components/views/profissional/profissional-update/profissional-update.component';
import { ProfissionalDeleteComponent } from './components/views/profissional/profissional-delete/profissional-delete.component';
import { ProfissionalCreateComponent } from './components/views/profissional/profissional-create/profissional-create.component';
import { ProfissionalReadComponent } from './components/views/profissional/profissional-read/profissional-read.component';


import { UsuarioCreateComponent } from './components/views/usuario/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './components/views/usuario/usuario-delete/usuario-delete.component';
import { UsuarioReadComponent } from './components/views/usuario/usuario-read/usuario-read.component';
import { UsuarioUpdateComponent } from './components/views/usuario/usuario-update/usuario-update.component';


import { ColaboradorDeleteComponent } from './components/views/colaborador/colaborador-delete/colaborador-delete.component';
import { ColaboradorCreateComponent } from './components/views/colaborador/colaborador-create/colaborador-create.component';
import { ColaboradorUpdateComponent } from './components/views/colaborador/colaborador-update/colaborador-update.component';
import { ColaboradorReadComponent } from './components/views/colaborador/colaborador-read/colaborador-read.component';

import { PacienteCreateComponent } from './components/views/paciente/paciente-create/paciente-create.component';
import { PacienteUpdateComponent } from './components/views/paciente/paciente-update/paciente-update.component';
import { PacienteDeleteComponent } from './components/views/paciente/paciente-delete/paciente-delete.component';
import { PacienteReadComponent } from './components/views/paciente/paciente-read/paciente-read.component';

import { AvaliacaoReadComponent } from './components/views/avaliacao/avaliacao-read/avaliacao-read.component';
import { AvaliacaoDeleteComponent } from './components/views/avaliacao/avaliacao-delete/avaliacao-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ProfissionalReadComponent,
    ProfissionalCreateComponent,
    ProfissionalDeleteComponent,
    ProfissionalUpdateComponent,
    LoginComponent,
    UsuarioCreateComponent,
    UsuarioDeleteComponent,
    UsuarioUpdateComponent,
    UsuarioReadComponent,
    ColaboradorReadComponent,
    ColaboradorDeleteComponent,
    ColaboradorCreateComponent,
    ColaboradorUpdateComponent,
    PacienteCreateComponent,
    PacienteUpdateComponent,
    PacienteDeleteComponent,
    PacienteReadComponent,
    AvaliacaoReadComponent,
    AvaliacaoCreateComponent,
    AvaliacaoDeleteComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatDividerModule,
    MatCardModule,
    MatChipsModule,
    MatSidenavModule,
    MatListModule ,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatExpansionModule,
    FontAwesomeModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
    NgxMaskModule.forRoot(),
  ],

  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]

})

export class AppModule { }
