import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/pages/home/home.component';
import { AboutComponent } from '../app/components/pages/about/about.component';
import { DashboardComponent } from '../app/components/pages/dashboard/dashboard.component';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { LoginComponent } from '../app/components/pages/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent, DashboardComponent, NavbarComponent]