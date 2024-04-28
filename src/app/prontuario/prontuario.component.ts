import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TitleHeaderService } from '../services/title-header.service';
@Component({
  selector: 'app-prontuario',
  standalone: true,
  imports: [MatDividerModule, MatListModule, RouterLink, NgIf, NgFor],
  templateUrl: './prontuario.component.html',
  styleUrl: './prontuario.component.css',
})
export class ProntuarioComponent {
  paciente: any;
  examsFrompct: any;
  consultas:any;
  
  listaPacientes: any;
  listaExames: any;
  listaConsultas: any;
  listaCheia: any;
  constructor(private activeRoute: ActivatedRoute, private headerTitle: TitleHeaderService) {}

  ngOnInit() {
    setTimeout(() => {
      this.headerTitle.setTitle('Prontuário');
    });
    const pctList:any = localStorage.getItem('patientsList');
    const exList:any = localStorage.getItem('exameList');
    const consulList:any = localStorage.getItem('consultaList');
      this.listaPacientes = JSON.parse(pctList);
      this.listaExames = JSON.parse(exList);
      this.listaConsultas = JSON.parse(consulList);
    
    this.activeRoute.params.subscribe((params) => {
      let id = params['id'];

      this.paciente = this.listaPacientes.filter(
        (paciente: { id: string }) => paciente?.id === id
      );
       if (this.paciente && this.paciente.length > 0) {
       const patient = this.paciente[0]; 
        this.examsFrompct = getExamsFromPatient(patient, this.listaExames); 
        
      }
          
    });
    //for pra pegar todos os ids dentro do array de exames do meu pct filtrado anteriormente
    function getExamsFromPatient(patient: any, ExamsList: any[]): any[] { 
      const examsFromPct: any[] = [];
      for (const id of patient.idsExames
      ) {
        const matchingExam = ExamsList.find(exam => exam.id === id);
        if (matchingExam) {
          examsFromPct.push(matchingExam);
        }
      }
      return examsFromPct; //retorna um array de objetos-exames
    }








    }


  







}
