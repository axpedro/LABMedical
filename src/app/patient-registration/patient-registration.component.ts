import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { BuscaCepService } from '../services/busca-cep.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';






@Component({
  selector: 'app-patient-registration',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule, RouterModule],
  templateUrl: './patient-registration.component.html',
  styleUrl: './patient-registration.component.css',
  providers: [BuscaCepService]
})
export class PatientRegistrationComponent {

  constructor(private buscaCep : BuscaCepService){
  }
  consultaCep(valor: string, form: any){
    
     this.buscaCep.getCep(valor).subscribe((dados=>this.cepData(dados, form)));
  }

 // patientList:any[] = [];

onInit(){
  
      
    }
   

cepData(dados :any, form : any){
  console.log(dados);
this.AddressForm.patchValue({
 
    street : dados.logradouro,
    city: dados.localidade,
    state: dados.uf,
    neighborhood: dados.bairro,
    complement: dados.complemento,
  

});


}

  AddressForm: FormGroup = new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
    number: new FormControl(''),
    complement: new FormControl(''),
    neighborhood: new FormControl(''),
    reference: new FormControl(''),

  })



  PatientForm: FormGroup = new FormGroup({
   
    fullName : new FormControl('' , [Validators.required , Validators.minLength(8), Validators.maxLength(64)]),
    Cpf: new FormControl('', [Validators.required]),
    gender :new FormControl('' , [Validators.required]),
    birth: new FormControl('' , [Validators.required]),
    rg : new FormControl('' , [Validators.required, Validators.minLength(20)]),
    rgExpeditor : new FormControl('', [Validators.required]),
    status : new FormControl('', [Validators.required]),
    phone : new FormControl(''),
    email : new FormControl('' , [Validators.email]),
    naturality : new FormControl('' , [Validators.required , Validators.minLength(8), Validators.maxLength(64)]),
    emergencyTel : new FormControl(''),
    address : this.AddressForm

  });
  onSubmit(){
    const isFormValid = this.PatientForm.valid;
    console.log(isFormValid);
    console.log(this.PatientForm.value);
    if(isFormValid){
      const localData = localStorage.getItem('patientsList');
    if(localData != null){
      const listaPacientes = JSON.parse(localData);
      listaPacientes.push(this.PatientForm.value);
      localStorage.setItem('patientsList',JSON.stringify(listaPacientes));
      alert('Cadastrado com sucesso');
  }
  else {
    const listaPacientes=[];
    listaPacientes.push(this.PatientForm.value);
    localStorage.setItem('patientsList',JSON.stringify(listaPacientes));
    alert('Cadastrado com sucesso');
  }

    }
    else{
      
      alert('Preencha os dados corretamente como informado no formulário');
    }

    
    
  }




}


