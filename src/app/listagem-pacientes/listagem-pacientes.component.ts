import { NgFor, NgIf } from '@angular/common';
import { CommonModule, formatDate, getLocaleTimeFormat } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-pacientes',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule, NgIf],
  templateUrl: './listagem-pacientes.component.html',
  styleUrl: './listagem-pacientes.component.css',
})
export class ListagemPacientesComponent {
  pageTitle: string = 'Listagem Pacientes';
  nomePesquisa = '';
  listaPacientes: any;
  listaCheia: any;

  constructor(private router: Router) {}
  ngOnInit() {
    const localData = localStorage.getItem('patientsList');
    if (localData != null) {
      this.listaPacientes = JSON.parse(localData);
      this.listaCheia = this.listaPacientes;
    } else {
    }
  }
  onPacienteSelected(paciente: any) {
    this.router.navigate(['/prontuario', paciente.id]);
  }

  filtraPct(nomePesquisa: string) {
    this.nomePesquisa = nomePesquisa; // Update search term
    if (!nomePesquisa) {
      this.listaPacientes = this.listaCheia; // Reset to original list if no search term
      return;
    }
    this.listaPacientes = this.listaPacientes.filter(
      (patient: { fullName: string }) =>
        patient.fullName.toLowerCase().includes(nomePesquisa.toLowerCase())
    );
  }
}
