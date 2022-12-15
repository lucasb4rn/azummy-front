import { ColaboradorService } from '../../../../services/colaborador.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProfissionalService } from '../../../../services/profissional.service';
import { Profissional } from '../../../../models/profissional';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profissional-read',
  templateUrl: './profissional-read.component.html',
  styleUrls: ['./profissional-read.component.css']
})
export class ProfissionalReadComponent implements OnInit {
  
  ELEMENT_DATA: Profissional[] = []

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'sexo', 'acoes'];
  
  dataSource = new MatTableDataSource<Profissional>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private service: ProfissionalService, private colaboradorService: ColaboradorService, private router: Router) { }
  
  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Profissional>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
