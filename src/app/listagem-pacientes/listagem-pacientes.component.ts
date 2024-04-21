import { NgFor } from '@angular/common';
import { CommonModule, formatDate, getLocaleTimeFormat } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listagem-pacientes',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule],
  templateUrl: './listagem-pacientes.component.html',
  styleUrl: './listagem-pacientes.component.css'
})
export class ListagemPacientesComponent {
nomePesquisa = '';
listaPacientes: any;
listaCheia: any;


  ngOnInit(){
  const localData = localStorage.getItem('patientsList');
  if(localData != null){
    
     this.listaPacientes = JSON.parse(localData);
    this.listaCheia = this.listaPacientes;
     
     
}
else {
  
  
}



}
filtraPct(nomePesquisa: string) {
  this.nomePesquisa = nomePesquisa; // Update search term
  if (!nomePesquisa) {
    this.listaPacientes = this.listaCheia; // Reset to original list if no search term
    return;
  }
  this.listaPacientes = this.listaPacientes.filter((patient: { fullName: string; }) => patient.fullName.toLowerCase().includes(nomePesquisa.toLowerCase()));
}

}
