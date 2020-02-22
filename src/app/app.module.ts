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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    weatherService,
    locationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
