import { AvaliacaoService } from './../../../../services/avaliacao.service';
import { ProfissionalService } from '../../../../services/profissional.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profissional } from '../../../../models/profissional';
import { AvaliacaoDTO } from 'src/app/models/avalicaoDTO';
import { Avaliacao } from 'src/app/models/avalicao';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-avaliacao-delete',
  templateUrl: './avaliacao-delete.component.html',
  styleUrls: ['./avaliacao-delete.component.css']
})
export class AvaliacaoDeleteComponent implements OnInit {
  
  avaliacao: Avaliacao;


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
  
  constructor(private service: AvaliacaoService, private toast: ToastrService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.avaliacaoDTO.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }
  
  findById(): void {
    this.service.findById(this.avaliacaoDTO.id!).subscribe((resposta) =>{
      this.avaliacao = resposta;
    } )
  }
  
  delete(): void {
    this.service.delete(this.avaliacao.id).subscribe(() => {
      this.toast.success('Avaliação deletada com sucesso', 'Delete');
      this.router.navigate(['avaliacao'])
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.forEach((element: any) => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }
  
  cancel(): void {
    this.router.navigate(['avaliacao'])
  }
  
  
  
}
