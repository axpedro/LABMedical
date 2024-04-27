import { CommonModule, formatDate } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { v4 as uuidv4 } from 'uuid'; 
import { TitleHeaderService } from '../services/title-header.service';
@Component({
  selector: 'app-cadastro-exame',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule, RouterModule],
  templateUrl: './cadastro-exame.component.html',
  styleUrl: './cadastro-exame.component.css'
})
export class CadastroExameComponent {
  
  constructor(private headerTitle: TitleHeaderService){}
  ngOnInit(){
    setTimeout(() => {
      this.headerTitle.setTitle('Cadastro de Exames');
    });  
    //const localData = localStorage.getItem('exameList');
    
      
      
    
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
    console.log(isFormValid);
    console.log(this.ExamesForm.value);
    if(isFormValid){
      const localData = localStorage.getItem('exameList');
    if(localData != null){
      const listaExames = JSON.parse(localData);
      listaExames.push(this.ExamesForm.value);
      localStorage.setItem('exameList',JSON.stringify(listaExames));
      alert('Exame cadastrado com sucesso');
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


 







}
