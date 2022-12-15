import { ProfissionalService } from './../../../../services/profissional.service';
import { Paciente } from './../../../../models/paciente';
import { ResultadoAvaliacao } from './../../../../models/resultadoAvalicao';
import { AvaliacaoDTO } from './../../../../models/avalicaoDTO';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PacienteService } from 'src/app/services/paciente.service';
import { AvaliacaoService } from 'src/app/services/avaliacao.service';
import { Profissional } from 'src/app/models/profissional';

@Component({
  selector: 'app-avaliacao-create',
  templateUrl: './avaliacao-create.component.html',
  styleUrls: ['./avaliacao-create.component.css']
})
export class AvaliacaoCreateComponent implements OnInit {
  
  avaliacaoDTO: AvaliacaoDTO = {
    id: '',
    paciente: '',
    profissional: '',
    informacoesFisicas: {
      id: '',
      altura: 0,
      peso: 0,
      medida1: '',
      medida2: '',
      medida3: '',
      medida4: '',
      medida5: '',
      medida6: '',
      medida7: '',
    },
    resultadoAvaliacao: {
      id: '',
      imc: '',
      indiceGorduras: 0,
    },
    
  }
  
  profissionais: Profissional[] = [];
  pacientes: Paciente[] = []
  
  
  peso:    FormControl = new FormControl(null, [Validators.required]);
  altura:    FormControl =  new FormControl(null, Validators.required);
  medida1:    FormControl = new FormControl(null, [Validators.required]);
  medida2:    FormControl = new FormControl(null, [Validators.required]);
  medida3:    FormControl = new FormControl(null, [Validators.required]);
  medida4:    FormControl = new FormControl(null, [Validators.required]);
  medida5:    FormControl = new FormControl(null, [Validators.required]);
  medida6:    FormControl = new FormControl(null, [Validators.required]);
  medida7:    FormControl = new FormControl(null, [Validators.required]);
  
  paciente:    FormControl = new FormControl(null, [Validators.required]);
  profissional:    FormControl = new FormControl(null, [Validators.required]);
  
  constructor(
    private service: AvaliacaoService,
    private pacienteService: PacienteService,
    private profissionalService: ProfissionalService,
    private toastService:    ToastrService,
    private router: Router,
    ) { }
    
    ngOnInit(): void {
      this.findAllPaciente();
      this.findAllProfissional();
    }
    
    findAllPaciente(): void {
      this.pacienteService.findAll().subscribe(resposta => {
        this.pacientes = resposta;
      })
    }
    
    findAllProfissional(): void {
      this.profissionalService.findAll().subscribe(resposta => {
        this.profissionais = resposta;
      })
    }
    
    
    create(): void {
      
      this.avaliacaoDTO.resultadoAvaliacao.imc =  "" + this.avaliacaoDTO.informacoesFisicas.altura * this.avaliacaoDTO.informacoesFisicas.peso;
      console.log(this.avaliacaoDTO.resultadoAvaliacao.imc);
      
      this.avaliacaoDTO.resultadoAvaliacao.indiceGorduras = 60
      
      this.service.create(this.avaliacaoDTO).subscribe(resposta => {
        this.toastService.success('Avalicação criada com sucesso', 'Avaliação');
        this.router.navigate(['avaliacao']);
      }, ex => {    
        this.toastService.error(ex.error.error);
      })
    }
    
    validaCampos(): boolean {
      return this.peso.valid && this.altura.valid && this.medida1.valid &&
      this.medida2.valid && this.medida3.valid && this.medida4.valid && 
      this.medida5.valid && this.medida6.valid && this.medida7.valid &&
      this.paciente.valid && this.profissional.valid
    }
    
  }
  