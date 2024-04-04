import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,SidebarComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
dashboardList:any[]=[
{
  name:'Dashboard',icon:'bi bi-grid-fill'
},
{
  name:'Products',icon:'bi bi-grid-fill'
},
{
  name:'Inventory',icon:'bi bi-grid-fill'
},
{
  name:'Orders',icon:'bi bi-grid-fill'
},
{
  name:'Sales',icon:'bi bi-grid-fill'
},
{
  name:'Customers',icon:'bi bi-grid-fill'
}
,
{
  name:'Logout',icon:'bi bi-grid-fill'
}
];
}
