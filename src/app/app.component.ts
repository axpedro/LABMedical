import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgIf } from '@angular/common';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { CadastroConsultaComponent } from './cadastro-consulta/cadastro-consulta.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    NgxMaskDirective,
    NgxMaskPipe,
    RouterOutlet,
    LoginComponent,
    SideBarComponent,
    DashboardComponent,
    NgIf,
    PatientRegistrationComponent,
    CadastroConsultaComponent,
    HeaderComponent,
  ],
})
export class AppComponent {
  title = 'LABMedical';
  showSidebar = true;
 

  constructor(private router: Router) {}
 

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/login') {
        this.showSidebar = false;
        
      } else {
        this.showSidebar = true;
        
        
      }
    });
  }
}
