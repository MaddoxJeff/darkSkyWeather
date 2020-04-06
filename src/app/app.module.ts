import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from './shared.module';


// Routes
import { RouterModule } from '@angular/router';
import { AppRoutes } from './routes';

// Main Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';

// Services
import { weatherService } from './services/apis/weather.service';
import { locationService } from './services/apis/location.service';
import { locationView } from './models/location.model';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule, MatDialogModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { DialogNavComponent } from './dialog-nav/dialog-nav.component';
import { ZipcodeDialogueComponent } from './components/modals/zipcode-dialogue/zipcode-dialogue.component';
import { LoginComponent } from '../app/components/pages/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    NavbarComponent,
    DialogNavComponent,
    ZipcodeDialogueComponent,
    LoginComponent,


    
  ],
  entryComponents: [
    DialogNavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    weatherService,
    locationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
