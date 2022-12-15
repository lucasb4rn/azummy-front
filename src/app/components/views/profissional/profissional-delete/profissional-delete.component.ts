import { ProfissionalService } from '../../../../services/profissional.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profissional } from '../../../../models/profissional';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profissional-delete',
  templateUrl: './profissional-delete.component.html',
  styleUrls: ['./profissional-delete.component.css']
})
export class ProfissionalDeleteComponent implements OnInit {
  
  profissional: Profissional = {
    id: '',
    nome: '',
    colaborador: {
      id: '',
      nome: '',
      cpf: '',
      rg: '',
      sexo: '',
      dataNascimento:'',
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
  }
  
  constructor(private service: ProfissionalService, private toastService: ToastrService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.profissional.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }
  
  findById(): void {
    this.service.findById(this.profissional.id!).subscribe((resposta) =>{
      this.profissional = resposta;
      console.log(this.profissional)
    } )
  }
  
  delete(): void {
    this.service.delete(this.profissional.id!).subscribe((resposta) => {
      this.toastService.success('Profissional DELETADO com sucesso');
      this.router.navigate(['profissional']);
    }, ex => {
      this.toastService.error(ex.error.error);
    })
  }
  
  cancel(): void {
    this.router.navigate(['profissional'])
  }
  
  
  
}
