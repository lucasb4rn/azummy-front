import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Colaborador } from 'src/app/models/colaborador';
import { ColaboradorService } from 'src/app/services/colaborador.service';

@Component({
  selector: 'app-colaborador-create',
  templateUrl: './colaborador-create.component.html',
  styleUrls: ['./colaborador-create.component.css']
})
export class ColaboradorCreateComponent implements OnInit {

  colaborador: Colaborador = {
    id:  '',
    nome:      '',
    cpf:      '',
    rg: '',
    sexo:     '',
    dataNascimento: '',
    contato: {
      telefone: '',
      celular: '',
      email: ''
    },
    endereco: {
      cep: '',
      endereco: '',
      cidade: '',
      uf: '',
      pais: '',
    },
  }

  nome:    FormControl = new FormControl(null, [Validators.required]);
  cpf:    FormControl = new FormControl(null, [Validators.required]);
  rg:    FormControl = new FormControl(null, [Validators.required]);
  sexo:    FormControl = new FormControl(null, [Validators.required]);
  dataNascimento:    FormControl = new FormControl(null, [Validators.required]);

  cep:    FormControl = new FormControl(null, [Validators.required]);
  endereco:    FormControl = new FormControl(null, [Validators.required]);
  cidade:    FormControl = new FormControl(null, [Validators.required]);
  uf:    FormControl = new FormControl(null, [Validators.required]);
  pais:    FormControl = new FormControl(null, [Validators.required]);

  telefone:    FormControl = new FormControl(null, [Validators.required]);
  celular:    FormControl = new FormControl(null, [Validators.required]);
  email:    FormControl =  new FormControl(null, Validators.email);

  constructor(
    private service: ColaboradorService,
    private toastService:    ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.colaborador).subscribe(resposta => {
      this.toastService.success('Colaborador criado com sucesso', 'Novo Colaborador');
      this.router.navigate(['colaborador']);
    }, ex => {    
      this.toastService.error(ex.error.error);
    })
  }

  validaCampos(): boolean {
    return this.nome.valid && this.cpf.valid && this.rg.valid && 
    this.sexo.valid && this.dataNascimento.valid && this.telefone.valid && 
    this.celular.valid && this.email.valid && this.cep.valid && 
    this.endereco.valid && this.cidade.valid && this.uf.valid && this.pais.valid
  }

}
