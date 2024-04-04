import { Routes } from '@angular/router';
import { LoginComponent } from './Components/Auth/login/login.component';
import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard.component';
import { HomeComponent } from './Components/Dashboard/dashboard/home/home.component';
import { ProductsComponent } from './Components/Dashboard/dashboard/products/products.component';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {
        path:'dashboard',component:DashboardComponent,
        children:[
           {path:'',component:HomeComponent},
           {path:'product',component:ProductsComponent}

        ]
    }

];
