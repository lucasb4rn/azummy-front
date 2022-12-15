import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  

  panelOpenState = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toast: ToastrService) { }
    
    ngOnInit(): void {
      this.router.navigate(['home'])
    }
    
    logout() {
      this.router.navigate(['login'])
      this.authService.logout();
      this.toast.info('Logout realizado com sucesso', 'Logout')
    }
    
    hideColaborador: boolean = false;
    hidePaciente: boolean = false;
    hideRelatorios: boolean = false;
    
    escondeColaborador(){
      
      if(this.hideColaborador == true){
        this.hideColaborador = false;
      } else {
        this.hideColaborador =true;
      }
      
    }
    
    escondePaciente(){
      
      if(this.hidePaciente == true){
        this.hidePaciente = false;
      } else {
        this.hidePaciente =true;
      }
    }
    
    escondeRelatorios(){
      
      if(this.hideRelatorios == true){
        this.hideRelatorios = false;
      } else {
        this.hideRelatorios =true;
      }
    }
    
    
  }
  