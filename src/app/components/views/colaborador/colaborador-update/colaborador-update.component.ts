import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Colaborador } from 'src/app/models/colaborador';
import { ColaboradorService } from 'src/app/services/colaborador.service';

@Component({
  selector: 'app-colaborador-update',
  templateUrl: './colaborador-update.component.html',
  styleUrls: ['./colaborador-update.component.css']
})
export class ColaboradorUpdateComponent implements OnInit {

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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.colaborador.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }


   
  findById(): void {
    this.service.findById(this.colaborador.id).subscribe((resposta) => {
      this.colaborador = resposta;     
    })
  }

  update(): void {
    this.service.update(this.colaborador).subscribe(resposta => {
      this.toastService.success('Colaborador Atualizado com sucesso', 'Atualizar Colaborador');
      this.router.navigate(['colaborador']);
    }, ex => {    
      this.toastService.error(ex.error.error);
    })
  }

  cancel(): void {
    this.router.navigate(['colaborador']);
  }

  validaCampos(): boolean {
    return this.nome.valid && this.cpf.valid && this.rg.valid && 
    this.sexo.valid && this.dataNascimento.valid && this.telefone.valid && 
    this.celular.valid && this.email.valid && this.cep.valid && 
    this.endereco.valid && this.cidade.valid && this.uf.valid && this.pais.valid
  }

}
