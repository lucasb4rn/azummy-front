import { ActivatedRoute, Router } from '@angular/router';
import { ProfissionalService } from '../../../../services/profissional.service';
import { Component, OnInit } from '@angular/core';
import { Profissional } from '../../../../models/profissional';
import { ColaboradorService } from '../../../../services/colaborador.service';
import { FormControl, Validators } from '@angular/forms';
import { Colaborador } from 'src/app/models/colaborador';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profissional-update',
  templateUrl: './profissional-update.component.html',
  styleUrls: ['./profissional-update.component.css']
})
export class ProfissionalUpdateComponent implements OnInit {
  
  profissional: Profissional = {
    id: '',
    nome: '',
    colaborador: '',
  }
  
  colaboradores: Colaborador[] = []

  nome:    FormControl = new FormControl(null, [Validators.required]);
  colaborador:    FormControl = new FormControl(null, [Validators.required]);

  constructor(private service: ProfissionalService, private toastService: ToastrService, private colaboradorService: ColaboradorService, private route: ActivatedRoute, private router: Router) {
    
  }
  
  ngOnInit(): void {
    this.profissional.id = this.route.snapshot.paramMap.get('id')!
    this.findAllColaborador();
    this.findById();
  }
  
  findAllColaborador(): void {
    this.colaboradorService.findAll().subscribe(resposta => {
      this.colaboradores = resposta;
    })
  }

  findById(): void {
    this.service.findById(this.profissional.id!).subscribe((resposta) => {
      this.profissional = resposta;
    })
  }

  update(): void {
    this.service.update(this.profissional).subscribe((resposta) => {
      this.toastService.success('Profissional atualizado com Sucesso!');
      this.router.navigate(['profissional'])
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
