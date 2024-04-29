import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { CadastroConsultaComponent } from './cadastro-consulta/cadastro-consulta.component';
import { CadastroExameComponent } from './cadastro-exame/cadastro-exame.component';
import { ListagemPacientesComponent } from './listagem-pacientes/listagem-pacientes.component';
import { ProntuarioComponent } from './prontuario/prontuario.component';

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
        children: [
            { path: '', component: PatientRegistrationComponent},
            { path: 'edit/:id', component: PatientRegistrationComponent},
            
          ]
        
      
           
        


    },{
        path:'cadastro-consulta',
        component: CadastroConsultaComponent

    },
    {
        path:'cadastro-exame',
        children:[
            {path:'', component: CadastroExameComponent},{
                path:'edit/:id', component: CadastroExameComponent
            }
        ]
        

    },
    {
        path:'listagem-pacientes',
        component: ListagemPacientesComponent

    },
    {
        path:'prontuario',
        component: ProntuarioComponent
    },
    { path: 'prontuario/:id', component: ProntuarioComponent

     },


];
