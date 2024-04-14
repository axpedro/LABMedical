import { Component , NgModule } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})



export class LoginComponent {
  
  SignUpForm: FormGroup;
  
    ngOnInit(){
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null){
    this.listUsers = JSON.parse(localData);
    }
    
      }
  constructor(private router : Router) {
    this.SignUpForm = new FormGroup({
      email: new FormControl('', [Validators.required , Validators.email]),
      userName: new FormControl('', [Validators.required , Validators.minLength(3)]),
      password: new FormControl('', [Validators.required , Validators.minLength(8)]),
      passwordConfirm: new FormControl('', [Validators.required , Validators.minLength(8)]),
      
    },{
      validators: this.passwordValidator,
    })
  }

  passwordValidator(control: AbstractControl){ //validador dos password no cadastro
    return control.get('password')?.value===control.get
    ('passwordConfirm')?.value? null:{'mismatch': true}
  }

  listUsers:any[] = [];
   /* signUpUser = {
    userName:'',
    email:'',
    password: '',
    passwordConfirm:''
  }*/

  loginUser: any = {
    email:'',
    password: ''
  }



  onSignUp(){
    const isFormValid = this.SignUpForm.valid;
    console.log(isFormValid);
    console.log(this.SignUpForm.value);
    if(isFormValid){
      this.listUsers.push(this.SignUpForm.value);
      console.log(this.listUsers);
      localStorage.setItem('signUpUsers' , JSON.stringify(this.listUsers));
      /*this.signUpUser = {
        userName:'',
        email:'',
        password: '',
        passwordConfirm:''
      }*/
    }
      
    else{
      alert('Preencha os dados corretamente como informado no formulário')
    
    }
    
    
  }
  onLogin(){
    const isUserExist = this.listUsers.find(u => u.email == this.loginUser.email && u.password == this.loginUser.password);
    if(isUserExist != undefined){
      localStorage.setItem('loggedUser', JSON.stringify(isUserExist));
      alert('Login correto')
      this.router.navigate(['/dashboard']); 
    }
    else {
      alert('Dados incorretos')
    }
    
    


  }
  resetPassword(){
alert('Função em desenvolvimento')
    
  }


  
 

  
   




}


