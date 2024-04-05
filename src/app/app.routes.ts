import { Routes } from '@angular/router';
import { LoginComponent } from './Components/Auth/login/login.component';
import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard.component';
import { HomeComponent } from './Components/Dashboard/dashboard/home/home.component';
import { ProductsComponent } from './Components/Dashboard/dashboard/products/products.component';
import { InventoryComponent } from './Components/Dashboard/dashboard/inventory/inventory.component';
import { OrdersComponent } from './Components/Dashboard/dashboard/orders/orders.component';
import { SalesComponent } from './Components/Dashboard/dashboard/sales/sales.component';
import { CustomersComponent } from './Components/Dashboard/dashboard/customers/customers.component';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {
        path:'dashboard',component:DashboardComponent,
        children:[
           {path:'',component:HomeComponent},
           {path:'product',component:ProductsComponent},
           {path:'inventory',component:InventoryComponent},
           {path:'orders',component:OrdersComponent},
           {path:'sale',component:SalesComponent},
           {path:'customers',component:CustomersComponent},

        ]
    }

];
