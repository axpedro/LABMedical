import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-prontuario',
  standalone: true,
  imports: [MatDividerModule, MatListModule, RouterLink, NgIf, NgFor],
  templateUrl: './prontuario.component.html',
  styleUrl: './prontuario.component.css',
})
export class ProntuarioComponent {
  paciente: any;
  listaPacientes: any;
  listaCheia: any;
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    const localData = localStorage.getItem('patientsList');
    if (localData != null) {
      this.listaPacientes = JSON.parse(localData);
    } else {
    }
    this.activeRoute.params.subscribe((params) => {
      let id = params['id'];

      this.paciente = this.listaPacientes.filter(
        (paciente: { id: string }) => paciente.id === id
      );
      console.log('Paciente filtrado:', this.paciente);
    });
  }

  getDetailsID(paciente: any) {}

  // filtraPct(id: string) {
  //   if (!id) {
  //     alert('pct nao encontrado');
  //   } else {
  //     this.paciente = this.listaPacientes.filter((patient: { id: string }) =>
  //       patient.id.includes(id)
  //     );
  //   }
  // }
}
