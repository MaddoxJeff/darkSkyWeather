import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/pages/home/home.component';
import { AboutComponent } from '../app/components/pages/about/about.component';
import { DashboardComponent } from '../app/components/pages/dashboard/dashboard.component';
import { NavbarComponent } from '../app/navbar/navbar.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  //{ path: '', component: NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent, DashboardComponent, NavbarComponent]