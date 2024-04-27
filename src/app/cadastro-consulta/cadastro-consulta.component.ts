import { CommonModule, formatDate, getLocaleTimeFormat } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { v4 as uuidv4 } from 'uuid'; 
import { TitleHeaderService } from '../services/title-header.service';
@Component({
  selector: 'app-cadastro-consulta',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule, RouterModule],
  templateUrl: './cadastro-consulta.component.html',
  styleUrl: './cadastro-consulta.component.css'
})
export class CadastroConsultaComponent {
  constructor(private router: Router, private headerTitle: TitleHeaderService) {}
  ngOnInit() {
    
    setTimeout(() => {
      this.headerTitle.setTitle('Cadastro Consulta');
    });
    const localData = localStorage.getItem('consultaList');
    
      
      
    
  };


  
  ConsultaForm: FormGroup = new FormGroup({
    id : new FormControl(uuidv4()),
    motivo: new FormControl('' ,[Validators.required , Validators.minLength(8), Validators.maxLength(64)]),
    dataConsulta: new FormControl(formatDate(new Date(), "dd-MM-yyyy", "en"), [Validators.required]),
    horarioConsulta: new FormControl(formatDate(new Date(), "hh:MM:ss", "en"), [Validators.required]),
    descricao: new FormControl('' ,[Validators.required , Validators.minLength(16), Validators.maxLength(1024)]),
    dosagemPrecaucao: new FormControl('' ,[Validators.required , Validators.minLength(16), Validators.maxLength(256)]),
    
  })






onSubmit(){
  const isFormValid = this.ConsultaForm.valid;
    console.log(isFormValid);
    console.log(this.ConsultaForm.value);
    if(isFormValid){
      const localData = localStorage.getItem('consultaList');
    if(localData != null){
      const listaConsultas = JSON.parse(localData);
      listaConsultas.push(this.ConsultaForm.value);
      localStorage.setItem('consultaList',JSON.stringify(listaConsultas));
      alert('Cadastrado com sucesso');
  }
  else {
    const listaConsultas=[];
    listaConsultas.push(this.ConsultaForm.value);
    localStorage.setItem('consultaList',JSON.stringify(listaConsultas));
    alert('Cadastrado de consulta com sucesso');
  }

    }
    else{
      
      alert('Preencha os dados corretamente como informado no formulário');
    }

    


}


 
}
