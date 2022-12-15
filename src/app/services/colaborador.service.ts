import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Colaborador } from '../models/colaborador';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})

export class ColaboradorService {

  baseUrl: String = API_CONFIG.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar, private router: Router) { 
 
  }

  create(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(`${API_CONFIG.baseUrl}/colaborador`, colaborador);
  }

  update(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.put<Colaborador>(`${API_CONFIG.baseUrl}/colaborador/${colaborador.id}`, colaborador);
  }

  findAll():Observable<Colaborador[]>{
    const url = `${this.baseUrl}/colaborador`
    return this.http.get<Colaborador[]>(url)
  }
  
  findById(id: String): Observable<Colaborador>{
    const url = `${this.baseUrl}/colaborador/${id}`
    return this.http.get<Colaborador>(url);
  }

  delete(id: any): Observable<Colaborador> {
    return this.http.delete<Colaborador>(`${API_CONFIG.baseUrl}/colaborador/${id}`);
  }

}
