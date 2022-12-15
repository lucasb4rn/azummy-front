import { ColaboradorService } from '../../../../services/colaborador.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Colaborador } from 'src/app/models/colaborador';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {
  
  usuario: Usuario = {
    id:         '',
    username:      '',
    password:      '',
    colaborador: '',
    perfis:     [],
  }
  
  username: FormControl =  new FormControl(null, Validators.minLength(3));
  password: FormControl = new FormControl(null, Validators.minLength(3));
  colaborador:    FormControl = new FormControl(null, [Validators.required]);
  
  colaboradores: Colaborador[] = []
  
  constructor(
    private colaboradorService: ColaboradorService,
    private service: UsuarioService,
    private toast:    ToastrService,
    private router:          Router,
    ) { }
    
    ngOnInit(): void {
      this.findAllColaborador();
    }
    
    findAllColaborador(): void {
      this.colaboradorService.findAll().subscribe(resposta => {
        this.colaboradores = resposta;
      })
    }
    
    create(): void {
      
      this.service.create(this.usuario).subscribe(() => {
        this.toast.success('Usuario cadastrado com sucesso', 'Cadastro');
        this.router.navigate(['usuario'])
      },  ex => {    
        this.toast.error(ex.error.error);
      })
    }
    
    addPerfil(perfil: any): void {
      console.log(perfil);
      if(this.usuario.perfis.includes(perfil)) {
        this.usuario.perfis.splice(this.usuario.perfis.indexOf(perfil), 1);
      } else {
        this.usuario.perfis.push(perfil);
      }
      
    }
    
    validaCampos(): boolean {
      return this.username.valid && this.password.valid
    }
  }
  