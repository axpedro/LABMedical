import { Component, NgModule } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';
import { TitleHeaderService } from '../services/title-header.service';
import { FormGroup, FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideBarComponent, RouterOutlet, FormsModule, CommonModule,  NgxMaskDirective,
    NgxMaskPipe,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  qtdPacientes: any;
  qtdExames: any;
  qtdConsultas: any;
  nomePesquisa: any;
  listaPctObj: any;
  listaCheia: any;

  constructor(private headerTitle: TitleHeaderService){}
  ngOnInit() {
    setTimeout(() => {
      this.headerTitle.setTitle('Estatísticas');
    });


    const listaPacientes: any = localStorage.getItem('patientsList');
    const ListaExames: any  = localStorage.getItem('exameList');
    const LIstaConsultas: any  = localStorage.getItem('consultaList');

    
    this.listaPctObj = JSON.parse(listaPacientes);
    this.listaCheia = this.listaPctObj;
    const listaExameObj = JSON.parse(ListaExames);
    const listaConsultaObj = JSON.parse(LIstaConsultas);

    this.qtdPacientes = this.listaPctObj?.length;
    this.qtdExames = listaExameObj?.length;
    this.qtdConsultas = listaConsultaObj?.length;





  }

  filtraPct(nomePesquisa: string) {
    this.nomePesquisa = nomePesquisa; // Update search term
    if (!nomePesquisa) {
      this.listaPctObj = this.listaCheia; // Reset to original list if no search term
      return;
    }
    this.listaPctObj = this.listaCheia.filter(
      (patient: { fullName: string, email: string, phone: string }) => {
        const fullNameMatch = patient.fullName && patient.fullName.toLowerCase().includes(nomePesquisa.toLowerCase());
        const emailMatch = patient.email && patient.email.toLowerCase().includes(nomePesquisa.toLowerCase());
        const phoneMatch = patient.phone && patient.phone.toLowerCase().includes(nomePesquisa.toLowerCase());
  
        return fullNameMatch || emailMatch || phoneMatch;
      }
    );
  }


  deatlhes(){}
  verDetalhes(){}
    
  }

