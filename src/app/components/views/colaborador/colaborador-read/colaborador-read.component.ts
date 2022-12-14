import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Colaborador } from 'src/app/models/colaborador';
import { ColaboradorService } from 'src/app/services/colaborador.service';


@Component({
  selector: 'app-usuario-read',
  templateUrl: './colaborador-read.component.html',
  styleUrls: ['./colaborador-read.component.css']
})

export class ColaboradorReadComponent implements OnInit {

  ELEMENT_DATA: Colaborador[] = []

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'sexo', 'acoes'];
  
  dataSource = new MatTableDataSource<Colaborador>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: ColaboradorService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Colaborador>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
