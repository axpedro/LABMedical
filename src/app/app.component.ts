import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgIf } from '@angular/common';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { CadastroConsultaComponent } from './cadastro-consulta/cadastro-consulta.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    NgxMaskDirective,
    NgxMaskPipe,
    RouterOutlet,
    LoginComponent,
    SideBarComponent,
    DashboardComponent,
    NgIf,
    PatientRegistrationComponent,
    CadastroConsultaComponent,
    HeaderComponent,
  ],
})
export class AppComponent {
  title = 'LABMedical';
  showSidebar = true;
  listaPacientes: any

  constructor(private router: Router) {}
 

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/login') {
        this.showSidebar = false;
        
      } else {
        this.showSidebar = true;
        
        
      }
    });

  //  this.listaPacientes =[{"id":"9f40aaf2-6d7c-491a-9e1c-c0f16633b8ba","fullName":"PAciente Um",
  //  "Cpf":"89789789708","gender":"Homem","birth":"1995-06-06","rg":"8789798789","rgExpeditor":"SSP",
  //  "status":"Solteiro(a)","phone":"76786789676","email":"paciente@bol.com","naturality":"Brasileiro","alergias":"nimesulida",
  //  "cuidados":"nenhum","NomeConvenio":"Unimed","NumeroConvenio":"123456789","validadeConvenio":"24082027",
  //  "idsExames":["efd8025c-1035-4bb2-9944-53f972c107e8","49a98fc3-92bd-4ab4-9c93-7c56bd439d16"],"idsConsultas":["83929ac1-17c5-486b-ba71-bd48c9430bde"],
  //  "emergencyTel":"56454564564","address":{"street":"Rua Capitão Romualdo de Barros","city":"Florianópolis","state":"SC","zip":"88040600","number":"8",
  //  "complement":"","neighborhood":"Carvoeira","reference":""}},{"id":"c9434ae4-ec69-4ff2-9528-abbcd2ecb096","fullName":"Maria jose","Cpf":"77876786796",
  //  "gender":"Homem","birth":"2000-01-04","rg":"7867867867","rgExpeditor":"SSP","status":"Solteiro(a)","phone":"90878979878","email":"maria@bol.com",
  //  "naturality":"brasileiro","alergias":"nimesulida","cuidados":"muleta","NomeConvenio":"Unimed","NumeroConvenio":"123243","validadeConvenio":"20082025",
  //  "idsExames":["5d69db14-0e4a-4b06-a027-50dd8d9648e5","4ff57de9-785e-4663-b1b3-f08a333e7601","25cefd14-1ff9-474e-8f20-6bdcc101518f"],"idsConsultas":["eda0fd45-96bf-4671-997c-e0c0a96c15c0"],
  //  "emergencyTel":"89789789789","address":{"street":"Rua Capitão Romualdo de Barros","city":"Florianópolis","state":"SC","zip":"88040600","number":"","complement":"",
  //  "neighborhood":"Carvoeira","reference":""}}];
  //  localStorage.setItem('patientsList',JSON.stringify(this.listaPacientes));
    // const localData = localStorage.getItem('patientsList');
    // if (localData != null) {
    //   this.listaPacientes = JSON.parse(localData);
    // } else {
    // }
    // this.listaPacientes.splice(1);
    // localStorage.setItem('patientsList',JSON.stringify(this.listaPacientes));

  }
}
