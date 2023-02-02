import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionDesLocatairesComponent } from './gestion-des-locataires/gestion-des-locataires.component';
import { GestionDesVehiculesComponent } from './gestion-des-vehicules/gestion-des-vehicules.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { GestionDesLocationsComponent } from './gestion-des-locations/gestion-des-locations.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiComponent } from './shared/api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionDesLocatairesComponent,
    GestionDesVehiculesComponent,
    DashbordComponent,
    GestionDesLocationsComponent,
    ApiComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'locataires', component: GestionDesLocatairesComponent },
      { path: 'vehicules', component:GestionDesVehiculesComponent },
      {path: 'locations', component: GestionDesLocationsComponent} 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
