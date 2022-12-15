import { ColaboradorService } from '../../../../services/colaborador.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Colaborador } from 'src/app/models/colaborador';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {
  
  usuario: Usuario = {
    id:         '',
    username:      '',
    password:      '',
    colaborador: '',
    perfis:     [],
  }
  
  
  isAdmin = false;
  isProfissional = false;
  isUsuario =false;
  
  username: FormControl =  new FormControl(null, Validators.minLength(3));
  password: FormControl = new FormControl(null, Validators.minLength(3));
  colaborador:    FormControl = new FormControl(null, [Validators.required]);
  
  colaboradores: Colaborador[] = []
  
  constructor(
    private colaboradorService: ColaboradorService,
    private service: UsuarioService,
    private toast:    ToastrService,
    private router:          Router,
    private route: ActivatedRoute,
    ) { }
    
    ngOnInit(): void {
      this.usuario.id = this.route.snapshot.paramMap.get('id')!
      this.findById();
      this.findAllColaborador();
      
      
    }
    
    findAllColaborador(): void {
      this.colaboradorService.findAll().subscribe(resposta => {
        this.colaboradores = resposta;
      })
    }
    
    findByIdCheckbox(): void {
      this.service.findById(this.usuario.id).subscribe((resposta) => {
        this.usuario = resposta;
        
        console.log(this.usuario.perfis);
        
        if(this.usuario.perfis.includes('ADMIN')){
          this.isAdmin = true;
        }
        
        if(this.usuario.perfis.includes('PROFISSIONAL')){
          this.isProfissional = true;
        }
        
        
        if(this.usuario.perfis.includes('USER')){
          this.isUsuario = true;
        }
        
      })
    }
    
    
    findById(): void {
      this.service.findById(this.usuario.id).subscribe((resposta) => {
        
        this.usuario.id = resposta.id,
        this.usuario.password = resposta.password,
        this.usuario.username = resposta.username,
        
        resposta.perfis.forEach(element => {
          
          if(element.valueOf() == "PROFISSIONAL"){
            this.addPerfil('1');
            this.isProfissional = true;
          }
          
          if(element.valueOf() == "USER"){
            this.addPerfil('2');
            this.isUsuario = true;
          }
          
          if(element.valueOf() == "ADMIN"){
            this.addPerfil('0');
            this.isAdmin = true;
          }
          
        });
      })
    }
    
    update(): void {  
      this.service.update(this.usuario).subscribe(() => {
        this.toast.success('Usuario atualizado com sucesso', 'Update');
        this.router.navigate(['usuario'])
      }, ex => {    
        this.toast.error(ex.error.error);
      })
    }
    
    addPerfil(perfil: any): void {
      
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
  