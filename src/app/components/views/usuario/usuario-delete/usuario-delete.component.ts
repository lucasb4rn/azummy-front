import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.css']
})
export class UsuarioDeleteComponent implements OnInit {

  usuario: Usuario = {
    id:         '',
    username:      '',
    password:      '',
    colaborador: null,
    perfis: [],
  }

  constructor(
    private service: UsuarioService,
    private toast:    ToastrService,
    private router:          Router,
    private route:   ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.usuario.id = this.route.snapshot.paramMap.get('id');
    this.findById();
   }

  findById(): void {
    this.service.findById(this.usuario.id).subscribe(resposta => {
      resposta.perfis = []
      this.usuario = resposta;
    })
  }

  delete(): void {
    this.service.delete(this.usuario.id).subscribe(() => {
      this.toast.success('Usuário deletado com sucesso', 'Delete');
      this.router.navigate(['usuario'])
    }, ex => {
      this.toast.error(ex.error.error);
    })
  }

}
