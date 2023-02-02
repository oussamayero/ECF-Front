import { GestionDesLocationsComponent } from './gestion-des-locations/gestion-des-locations.component';
import { GestionDesVehiculesComponent } from './gestion-des-vehicules/gestion-des-vehicules.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionDesLocatairesComponent } from './gestion-des-locataires/gestion-des-locataires.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [  
{path: 'locataires', component: GestionDesLocatairesComponent},
{path: 'vehicules', component: GestionDesVehiculesComponent},
{path: 'locations', component: GestionDesLocationsComponent}


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
