import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-patient-registration',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './patient-registration.component.html',
  styleUrl: './patient-registration.component.css'
})
export class PatientRegistrationComponent {
  AddressForm: FormGroup = new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl('')

  })
  PatientForm: FormGroup = new FormGroup({
   
    fullName : new FormControl(''),
    Cpf: new FormControl(''),
    ssp: new FormControl(''),
    gender :new FormControl(''),
    birth: new FormControl(''),
    rg : new FormControl(''),
    rgExpeditor : new FormControl(''),
    status : new FormControl(''),
    phone : new FormControl(''),
    email : new FormControl(''),
    nationality : new FormControl(''),
    emergencyTel : new FormControl(''),
    address : this.AddressForm

  });
  onSubmit(){
    console.log(this.PatientForm.value);

  }

// Nome Completo: Obrigatório, com máximo e mínimo de 64 e 8 caracteres, respectivamente.
// Gênero: Obrigatório com dropdown de opções pré-definidas.
// Data de Nascimento: Obrigatório, data válida.
// CPF: Obrigatório com o formato 000.000.000-00
// RG com órgão expedidor: Obrigatório, com máximo de 20 caracteres.
// Estado Civil: Obrigatório com dropdown de opções pré-definidas.
// Telefone: Obrigatório com o formato (99) 9 9999-99999
// E-mail: Não obrigatório e com validação.
// Naturalidade: Obrigatório, com máximo e mínimo de 64 e 8 caracteres, respectivamente.
// Contato de Emergência: Obrigatório com o formato (99) 9 9999-99999
// Lista de Alergias: Não obrigatório.
// Lista de Cuidados Específicos: Não obrigatório.
// Convênio: Não obrigatório.
// Número do Convênio: Não obrigatório.
// Validade do Convênio: Não obrigatório.
// Endereço: Cep, Cidade, Estado, Logradouro, Número, Complemento, Bairro e Ponto de Referência.







}


