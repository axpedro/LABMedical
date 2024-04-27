import { Component } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';
import { TitleHeaderService } from '../services/title-header.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideBarComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  

  constructor(private headerTitle: TitleHeaderService){}
  ngOnInit() {
    setTimeout(() => {
      this.headerTitle.setTitle('Estatísticas');
    });
  }
    
  }

