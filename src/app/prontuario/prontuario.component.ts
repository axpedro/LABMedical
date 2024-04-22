import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-prontuario',
  standalone: true,
  imports: [MatDividerModule, MatListModule, RouterLink],
  templateUrl: './prontuario.component.html',
  styleUrl: './prontuario.component.css'
})
export class ProntuarioComponent {
listaPacientes: any;
listaCheia: any;
constructor(private activeRoute: ActivatedRoute){}

ngOnInit(){
  this.activeRoute.params.subscribe(params =>{
    
    const id = params;
  })
  const localData = localStorage.getItem('patientsList');
  if(localData != null){
    
    this.listaPacientes = JSON.parse(localData);
    this.listaCheia = this.listaPacientes;
     
     
}
else {
  
  
}}


getDetailsID(id : number){



}

}
