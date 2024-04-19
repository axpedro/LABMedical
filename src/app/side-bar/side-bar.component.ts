import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDrawerMode} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {MatListModule} from '@angular/material/list';



@Component({
  selector: 'app-side-bar', 
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink, RouterLinkActive, MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule, DashboardComponent,MatListModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
drawerMode: MatDrawerMode = "push";
constructor(private router : Router){

}


  // LogOut(){
  //   this.router.navigate(['/login']); 
  // }




}
