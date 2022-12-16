import { Component, OnInit } from '@angular/core';
import { Colaborador } from 'src/app/models/colaborador';
import { ColaboradorService } from 'src/app/services/colaborador.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-colaborador-delete',
  templateUrl: './colaborador-delete.component.html',
  styleUrls: ['./colaborador-delete.component.css']
})
export class ColaboradorDeleteComponent implements OnInit {
  

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

  constructor(private service: ColaboradorService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.colaborador.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.colaborador.id).subscribe(resposta => {
      this.colaborador = resposta;
    })
  }
   
  delete(): void {
    this.service.delete(this.colaborador.id).subscribe(() => {
      this.toast.success('Colaborador deletado com sucesso', 'Delete');
      this.router.navigate(['colaborador'])
    }, ex => {
      this.toast.error(ex.error.error);
    })
  }

}
