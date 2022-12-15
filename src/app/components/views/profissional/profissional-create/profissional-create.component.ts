import { ColaboradorService } from '../../../../services/colaborador.service';
import { Router } from '@angular/router';
import { ProfissionalService } from '../../../../services/profissional.service';
import { Component, OnInit } from '@angular/core';
import { Profissional } from '../../../../models/profissional';
import { Colaborador } from 'src/app/models/colaborador';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profissional-create',
  templateUrl: './profissional-create.component.html',
  styleUrls: ['./profissional-create.component.css']
})
export class ProfissionalCreateComponent implements OnInit {
  
  profissional: Profissional = {
    id: '',
    nome: '',
    colaborador: '',
  }
  
  nome:    FormControl = new FormControl(null, [Validators.required]);
  colaborador:    FormControl = new FormControl(null, [Validators.required]);
  colaboradores: Colaborador[] = []
  
  constructor(private colaboradorService: ColaboradorService, private toastService: ToastrService, private service: ProfissionalService, private serviceColaborador: ColaboradorService, private router: Router) { }
  
  ngOnInit(): void {
    this.findAllColaborador();
  }
  
  findAllColaborador(): void {
    this.colaboradorService.findAll().subscribe(resposta => {
      this.colaboradores = resposta;
    })
  }
    
  create(): void  {
    this.service.create(this.profissional).subscribe((resposta) => {
      this.toastService.success('Avalicação criada com sucesso', 'Avaliação');
      this.router.navigate(['avaliacao']);
    }, ex => {    
      this.toastService.error(ex.error.error);
    })
      
  }
  
  
  validaCampos(): boolean {
    return this.nome.valid && this.colaborador.valid
  }
  
  cancel(): void {
    this.router.navigate([`profissional`])
  }
  
  
  
  
}
