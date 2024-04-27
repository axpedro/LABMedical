import { CommonModule, NgFor, formatDate } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { v4 as uuidv4 } from 'uuid'; 
import { TitleHeaderService } from '../services/title-header.service';
@Component({
  selector: 'app-cadastro-exame',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule, RouterModule, NgFor],
  templateUrl: './cadastro-exame.component.html',
  styleUrl: './cadastro-exame.component.css'
})
export class CadastroExameComponent {
  nomePesquisa = '';
  listaPacientes: any;
  pacienteID: any;
  pacienteSelected: any;
  novaLIstaPacientes: any ;
  
  
  constructor(private headerTitle: TitleHeaderService){}
  ngOnInit(){
    setTimeout(() => {
      this.headerTitle.setTitle('Cadastro de Exames');
    });
    const localData = localStorage.getItem('patientsList');
    if (localData != null) {
      this.listaPacientes = JSON.parse(localData);
      
    } else {
    }


     };

  ExamesForm: FormGroup = new FormGroup({
    id : new FormControl(uuidv4()),
    nomeExame: new FormControl('' ,[Validators.required , Validators.minLength(8), Validators.maxLength(64)]),
    dataExame: new FormControl(formatDate(new Date(), "dd-MM-yyyy", "en"), [Validators.required]),
    horarioExame: new FormControl(formatDate(new Date(), "hh:MM:ss", "en"), [Validators.required]),
    tipoExame: new FormControl('' ,[Validators.required , Validators.minLength(4), Validators.maxLength(32)]),
    laboratorio: new FormControl('' ,[Validators.required , Validators.minLength(4), Validators.maxLength(32)]),
    resultados: new FormControl('' ,[Validators.required , Validators.minLength(16), Validators.maxLength(1024)]),
  })

  onSubmit(){
  const isFormValid = this.ExamesForm.valid;
  const newExame = this.ExamesForm.value;
   
    if(isFormValid){
      const localData = localStorage.getItem('exameList');
    if(localData != null){
      const listaExames = JSON.parse(localData);
      listaExames.push(this.ExamesForm.value);
      //this.pacienteSelected.idsExames.push(this.ExamesForm.value.id);
      
      
     
      if (this.pacienteSelected && this.pacienteSelected.idsExames) {
        console.log('pct encontrado')
        this.pacienteSelected.idsExames.push(newExame.id);
        localStorage.setItem('exameList',JSON.stringify(listaExames));
        
      } else {
       alert('Favor selecionar um paciente da lista para inserir o exame');
       // this.pacienteSelected.idsExames = [newExame.id];
        return
      }
  
     
      
       if (this.listaPacientes != null) {
        console.log('objeto pct com id de exame' , this.listaPacientes )
         //const patientList = JSON.parse(this.listaPacientes);
       const index = this.listaPacientes.findIndex((patient: any) => patient.id === this.pacienteSelected.id);
         if (index !== -1) {
          this.listaPacientes[index] = this.pacienteSelected;
          localStorage.setItem('patientsList', JSON.stringify(this.listaPacientes));
         }
       }



      alert('Exame cadastrado com sucesso');
      this.ExamesForm.reset();


  }
  else {
    const listaExames=[];
    listaExames.push(this.ExamesForm.value);
    localStorage.setItem('exameList',JSON.stringify(listaExames));
    alert('Exame cadastrado com sucesso');
  }

    }
    else{
      
      alert('Preencha os dados corretamente como informado no formulário');
    }
    
}
onPacienteSelected(paciente: any) {
  this.pacienteSelected = paciente;
 
  this.pacienteID = paciente.id;
 
}

filtraPct(nomePesquisa: string) {
  this.nomePesquisa = nomePesquisa; // Update search term
  if (!nomePesquisa) {
    alert('Nenhum paciente cadastrado');
    
  }
  this.listaPacientes = this.listaPacientes.filter(
    (patient: { fullName: string }) =>
      patient.fullName.toLowerCase().includes(nomePesquisa.toLowerCase())
  );
}


 







}
