import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { CadastroConsultaComponent } from './cadastro-consulta/cadastro-consulta.component';
import { CadastroExameComponent } from './cadastro-exame/cadastro-exame.component';
import { ListagemPacientesComponent } from './listagem-pacientes/listagem-pacientes.component';

export const routes: Routes = [{


    path:'', redirectTo:'/login', pathMatch:'full'
},
    {

        path: 'login',
        component: LoginComponent
    },

    {
        path:'dashboard',
        component: DashboardComponent


    },
    {
        path:'patient-registration',
        component: PatientRegistrationComponent


    },{
        path:'cadastro-consulta',
        component: CadastroConsultaComponent

    },
    {
        path:'cadastro-exame',
        component: CadastroExameComponent

    },
    {
        path:'listagem-pacientes',
        component: ListagemPacientesComponent

    }


];
