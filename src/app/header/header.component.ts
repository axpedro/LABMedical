import { Component, Injectable, InjectionToken, Input } from '@angular/core';
import { PatientRegistrationComponent } from '../patient-registration/patient-registration.component';
import { TitleHeaderService } from '../services/title-header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  pageTitle: string | undefined;

constructor(private headerTitle: TitleHeaderService){}
  nome = '';

  ngOnInit() {
    
    this.headerTitle.getTitle().subscribe(title =>{
      this.pageTitle = title;
    })
    const user = localStorage.getItem('loggedUser');
    if (user != null) {
      const userLogged = JSON.parse(user);
      this.nome = userLogged.userName;
    } else {
    }
  }
}
