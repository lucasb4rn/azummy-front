import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Colaborador } from '../models/colaborador';
import { API_CONFIG } from '../config/api.config';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})

export class PacienteService {

  baseUrl: String = API_CONFIG.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar, private router: Router) { 
 
  }

  create(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(`${API_CONFIG.baseUrl}/paciente`, paciente);
  }

  update(paciente: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(`${API_CONFIG.baseUrl}/paciente/${paciente.id}`, paciente);
  }

  findAll():Observable<Paciente[]>{
    const url = `${this.baseUrl}/paciente`
    return this.http.get<Paciente[]>(url)
  }
  
  findById(id: String): Observable<Paciente>{
    const url = `${this.baseUrl}/paciente/${id}`
    return this.http.get<Paciente>(url);
  }

  delete(id: any): Observable<Colaborador> {
    return this.http.delete<Paciente>(`${API_CONFIG.baseUrl}/paciente/${id}`);
  }

}
