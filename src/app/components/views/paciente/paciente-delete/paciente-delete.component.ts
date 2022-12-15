import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-paciente-delete',
  templateUrl: './paciente-delete.component.html',
  styleUrls: ['./paciente-delete.component.css']
})
export class PacienteDeleteComponent implements OnInit {
  

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

  constructor(private service: PacienteService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.paciente.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.paciente.id).subscribe(resposta => {
      this.paciente = resposta;
    })
  }
   
  delete(): void {
    this.service.delete(this.paciente.id).subscribe(() => {
      this.toast.success('Paciente deletado com sucesso', 'Delete');
      this.router.navigate(['paciente'])
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
  
  
  
}
