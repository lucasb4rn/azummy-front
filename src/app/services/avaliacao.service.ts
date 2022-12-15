import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Avaliacao } from '../models/avalicao';
import { AvaliacaoDTO } from '../models/avalicaoDTO';

@Injectable({
  providedIn: 'root'
})

export class AvaliacaoService {

  baseUrl: String = API_CONFIG.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar, private router: Router) { 
 
  }

  create(avaliacaoDTO: AvaliacaoDTO): Observable<AvaliacaoDTO> {
    return this.http.post<AvaliacaoDTO>(`${API_CONFIG.baseUrl}/avaliacao`, avaliacaoDTO);
  }

  update(avaliacaoDTO: AvaliacaoDTO): Observable<AvaliacaoDTO> {
    return this.http.put<AvaliacaoDTO>(`${API_CONFIG.baseUrl}/avaliacao/${avaliacaoDTO.id}`, avaliacaoDTO);
  }

  findAll():Observable<Avaliacao[]>{
    const url = `${this.baseUrl}/avaliacao`
    return this.http.get<Avaliacao[]>(url)
  }
  
  findById(id: String): Observable<Avaliacao>{
    const url = `${this.baseUrl}/avaliacao/${id}`
    return this.http.get<Avaliacao>(url);
  }

  delete(id: any): Observable<Avaliacao> {
    return this.http.delete<Avaliacao>(`${API_CONFIG.baseUrl}/avaliacao/${id}`);
  }

}
