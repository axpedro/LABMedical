import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent, SideBarComponent, DashboardComponent, NgIf]
})
export class AppComponent {
  title = 'LABMedical';

  showSidebar = true;
  constructor(private router: Router) {}
 // @ViewChild('loginPage') loginPage: LoginComponent | any;


 ngOnInit() {

  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd && event.url === '/login') {
      this.showSidebar = false; // Hide sidebar on login page
    } else {
      this.showSidebar = true; // Show sidebar on other pages
    }
  });
}


  // this.router.events.subscribe(event => {
  //   if (event instanceof NavigationEnd) {
  //     // Check if the current route is the login page
  //     const currentRoute = this.router.url;
  //     if (currentRoute === '/login') {
  //       this.showSidebar = false; // Hide the sidebar on the login page
  //     } else {
  //       this.showSidebar = true; // Show the sidebar on other pages
  //     }
  //   }
  // });




  }


