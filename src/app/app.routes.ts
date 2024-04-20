import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';

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


    }


];
