import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { API_CONFIG } from '../config/api.config';
import { Credenciais } from '../models/credenciais';
import { BehaviorSubject } from 'rxjs';
import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  jwtService: JwtHelperService = new JwtHelperService();
  
  constructor(private http: HttpClient) { }
  
  authenticate(creds: Credenciais) {
    return this.http.post(`${API_CONFIG.baseUrl}/login`, creds, {
      observe: 'response',
      responseType: 'text'
    })
  }
  
  successfulLogin(authToken: string) {
    localStorage.setItem('token', authToken);
  }
  
  isAuthenticated() {
    
    let token = localStorage.getItem('token')
    
    if(token != null) {
      console.log("Valor do token -> " + token);
      console.log("Token Expirado - > " + !this.jwtService.isTokenExpired(token));
      return !this.jwtService.isTokenExpired(token);
    }
    
    console.log("Token Expirado return - > return false")
    return false;

  }
  
  logout() {
    localStorage.clear();
  }
  
}
