import { Component, Injectable, InjectionToken } from '@angular/core';
import { PatientRegistrationComponent } from '../patient-registration/patient-registration.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  nome = '';
  ngOnInit() {
    const user = localStorage.getItem('loggedUser');
    if (user != null) {
      const userLogged = JSON.parse(user);
      this.nome = userLogged.userName;
    } else {
    }
  }
}
