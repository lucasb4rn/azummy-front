import { AvaliacaoService } from './../../../../services/avaliacao.service';
import { ColaboradorService } from '../../../../services/colaborador.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Avaliacao } from 'src/app/models/avalicao';

@Component({
  selector: 'app-avaliacao-read',
  templateUrl: './avaliacao-read.component.html',
  styleUrls: ['./avaliacao-read.component.css']
})
export class AvaliacaoReadComponent implements OnInit {
  
  ELEMENT_DATA: Avaliacao[] = []

  displayedColumns: string[] = ['id', 'paciente', 'profissional', 'IMC', 'PERCENTUAL', 'acoes'];
  
  dataSource = new MatTableDataSource<Avaliacao>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private service: AvaliacaoService, private colaboradorService: ColaboradorService, private router: Router) { }
  
  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Avaliacao>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
