import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
  Validators,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BuscaCepService } from '../services/busca-cep.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, NavigationEnd, Router, RouterModule,  } from '@angular/router';
import {
  NgxMaskDirective,
  NgxMaskPipe,
  provideEnvironmentNgxMask,
} from 'ngx-mask';
import { v4 as uuidv4 } from 'uuid';
import { TitleHeaderService } from '../services/title-header.service';

@Component({
  selector: 'app-patient-registration',
  standalone: true,
  imports: [
    NgxMaskDirective,
    NgxMaskPipe,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    
  ],
  templateUrl: './patient-registration.component.html',
  styleUrl: './patient-registration.component.css',
  providers: [BuscaCepService],
})
export class PatientRegistrationComponent {
  isButtonEnabled = true;
  paciente: any;
  listaPacientes: any;
  constructor(private buscaCep: BuscaCepService,private router: Router, private headerTitle: TitleHeaderService, private activeRoute: ActivatedRoute) {}
  consultaCep(valor: string, form: any) {
    this.buscaCep.getCep(valor).subscribe((dados) => this.cepData(dados, form));
  }

  ngOnInit() {
   

    setTimeout(() => {
      this.headerTitle.setTitle('Cadastro de paciente');
    });
    
    this.activeRoute.params.subscribe((params) => {
      let id = params['id'];

      const localData = localStorage.getItem('patientsList');
      if(localData != null){
        this.listaPacientes = JSON.parse(localData);
      }
       
      this.paciente = this.listaPacientes.find(
        (paciente: { id: string }) => paciente?.id === id
      );
       if(!this.paciente){
        console.log(this.PatientForm.value.fullName)
         this.isButtonEnabled = false;
       }
     


      this.PatientForm.patchValue({
        fullName: this.paciente.fullName ? this.paciente.fullName:null,
        Cpf: this.paciente.Cpf ? this.paciente.Cpf:null,
        gender: this.paciente.gender ? this.paciente.gender:null,
        birth: this.paciente.birth ? this.paciente.birth:null,
        rg: this.paciente.rg ? this.paciente.rg:null,
        rgExpeditor: this.paciente.rgExpeditor ? this.paciente.rgExpeditor:null,
        status: this.paciente.status ? this.paciente.status:null,
        phone: this.paciente.phone ? this.paciente.phone:null,
        email: this.paciente.email ? this.paciente.email:null,
        naturality: this.paciente.naturality ? this.paciente.naturality:null,
        alergias: this.paciente.alergias ? this.paciente.alergias:null,
        cuidados: this.paciente.cuidados ? this.paciente.cuidados:null,
        NomeConvenio: this.paciente.NomeConvenio ? this.paciente.NomeConvenio:null,
        NumeroConvenio:this.paciente.NumeroConvenio ? this.paciente.NumeroConvenio:null,
        validadeConvenio: this.paciente.validadeConvenio ? this.paciente.validadeConvenio:null,
        emergencyTel: this.paciente.emergencyTel ? this.paciente.emergencyTel:null,
      });

      this.AddressForm.patchValue({
        zip: this.paciente.address.zip ? this.paciente.address.zip:null,
        street: this.paciente.address.street ? this.paciente.address.street:null,
        city: this.paciente.address.city ? this.paciente.address.city:null,
        state: this.paciente.address.state ? this.paciente.address.state:null,
        neighborhood: this.paciente.address.neighborhood ? this.paciente.address.neighborhood:null,
        complement: this.paciente.address.complement ? this.paciente.address.complement:null,
      });
      
      
    });
   
        

  }
  verificaIds() {
    if (!this.paciente.idsExames.length && !this.paciente.idsConsultas.length) {
      alert('Deletando o paciente');
      // Proceed with deleting the patient or perform other actions
    } else {
      alert('Não é possível excluir o paciente pois o mesmo tem consultas ou exames vinculados');
    }
  }







  cepData(dados: any, form: any) {
    //console.log(dados);
    this.AddressForm.patchValue({
      street: dados.logradouro,
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
  });

  PatientForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(64),
    ]),
    Cpf: new FormControl(''),
    gender: new FormControl('', [Validators.required]),
    birth: new FormControl('', [Validators.required]),
    rg: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    rgExpeditor: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    naturality: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(64),
    ]),
    alergias: new FormControl(''),
    cuidados: new FormControl(''),
    NomeConvenio: new FormControl(''),
    NumeroConvenio: new FormControl(''),
    validadeConvenio: new FormControl(''),
    idsExames: new FormControl([]),
    idsConsultas: new FormControl([]),
    emergencyTel: new FormControl('', [Validators.required]),
    address: this.AddressForm,
  });

  onSubmit() {
    const isFormValid = this.PatientForm.valid;
    //console.log(isFormValid);
    //console.log(this.PatientForm.value);
    if (isFormValid) {
      const newConsultaFormValue = { ...this.PatientForm.value, id: uuidv4() };
      const localData = localStorage.getItem('patientsList');
      if (localData != null) {
        const listaPacientes = JSON.parse(localData);
        listaPacientes.push(newConsultaFormValue);
        //listaPacientes.push(this.PatientForm.value);
        localStorage.setItem('patientsList', JSON.stringify(listaPacientes));
        this.PatientForm.reset();
        alert('Cadastrado com sucesso');
      } else {
        const listaPacientes = [];
        listaPacientes.push(this.PatientForm.value);
        localStorage.setItem('patientsList', JSON.stringify(listaPacientes));
        alert('Cadastrado com sucesso');
        this.PatientForm.reset();
      }
    } else {
      alert('Preencha os dados corretamente como informado no formulário');
    }
  }
}
