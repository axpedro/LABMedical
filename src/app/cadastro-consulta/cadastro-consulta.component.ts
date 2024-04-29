import { CommonModule, NgFor, formatDate, getLocaleTimeFormat } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { v4 as uuidv4 } from 'uuid'; 
import { TitleHeaderService } from '../services/title-header.service';
@Component({
  selector: 'app-cadastro-consulta',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule, RouterModule, NgFor],
  templateUrl: './cadastro-consulta.component.html',
  styleUrl: './cadastro-consulta.component.css'
})
export class CadastroConsultaComponent {
  nomePesquisa = '';
  listaPacientes: any;
  pacienteSelected: any;




  constructor(private router: Router, private headerTitle: TitleHeaderService) {}
  ngOnInit() {
    
    setTimeout(() => {
      this.headerTitle.setTitle('Cadastro Consulta');
    });
    //const localData = localStorage.getItem('consultaList');
    const localData = localStorage.getItem('patientsList');
    if (localData != null) {
      this.listaPacientes = JSON.parse(localData);
      
    } else {
    }
      
      
    
  };


  
  ConsultaForm: FormGroup = new FormGroup({
    id : new FormControl(uuidv4(),[Validators.required] ),
    motivo: new FormControl('' ,[Validators.required , Validators.minLength(8), Validators.maxLength(64)]),
    dataConsulta: new FormControl(formatDate(new Date(), "dd-MM-yyyy", "en"), [Validators.required]),
    horarioConsulta: new FormControl(formatDate(new Date(), "hh:MM:ss", "en"), [Validators.required]),
    descricao: new FormControl('' ,[Validators.required , Validators.minLength(16), Validators.maxLength(1024)]),
    dosagemPrecaucao: new FormControl('' ,[Validators.required , Validators.minLength(16), Validators.maxLength(256)]),
    
  })


onSubmit(){
  const isFormValid = this.ConsultaForm.valid;
  const newConsulta = this.ConsultaForm.value;

    if(isFormValid){
      const localData = localStorage.getItem('consultaList');
    if(localData != null){
      const listaConsultas = JSON.parse(localData);
      listaConsultas.push(this.ConsultaForm.value);

      if (this.pacienteSelected && this.pacienteSelected.idsConsultas) {
        console.log('pct encontrado')
        this.pacienteSelected.idsConsultas.push(newConsulta.id);
        localStorage.setItem('consultaList',JSON.stringify(listaConsultas));
        
      } else {
       alert('Favor selecionar um paciente da lista para inserir a Consulta');
       // return
      }
             
       if (this.listaPacientes != null) {
        //console.log('objeto pct com id de exame' , this.listaPacientes )
         //const patientList = JSON.parse(this.listaPacientes);
       const index = this.listaPacientes.findIndex((patient: any) => patient.id === this.pacienteSelected.id);
         if (index !== -1) {
          this.listaPacientes[index] = this.pacienteSelected;
          localStorage.setItem('patientsList', JSON.stringify(this.listaPacientes));
         }
       }


      //localStorage.setItem('consultaList',JSON.stringify(listaConsultas));
      alert('Consulta cadastrada com sucesso');
      this.ConsultaForm.reset();
  }
   else {
    const listaConsultas=[];
    listaConsultas.push(this.ConsultaForm.value);
    localStorage.setItem('consultaList',JSON.stringify(listaConsultas));
     alert('Cadastro de consulta com sucesso');
   }

    }
    else{
      
      alert('Preencha os dados corretamente como informado no formulário');
    }

    


}

onPacienteSelected(paciente: any) {
  this.pacienteSelected = paciente;
  
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
