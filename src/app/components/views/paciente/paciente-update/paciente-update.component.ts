import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-paciente-update',
  templateUrl: './paciente-update.component.html',
  styleUrls: ['./paciente-update.component.css']
})
export class PacienteUpdateComponent implements OnInit {

  paciente: Paciente = {
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
    private service: PacienteService,
    private toastService:    ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paciente.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }


   
  findById(): void {
    this.service.findById(this.paciente.id).subscribe((resposta) => {
      this.paciente = resposta;     
    })
  }

  update(): void {
    this.service.update(this.paciente).subscribe(resposta => {
      this.toastService.success('Paciente Atualizado com sucesso', 'Atualizar Paciente');
      this.router.navigate(['paciente']);
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

  cancel(){
   this.router.navigate(['paciente']);
  }

}
