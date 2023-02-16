import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddUtilisateurComponent } from './components/add-utilisateur/add-utilisateur.component';
import { UtilisateurDetailsComponent } from './components/utilisateur-details/utilisateur-details.component';
import { UtilisateursListComponent } from './components/utilisateurs-list/utilisateurs-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'utilisateurs', pathMatch: 'full' },
  { path: 'utilisateurs', component: UtilisateursListComponent },
  { path: 'utilisateurs/:id', component: UtilisateurDetailsComponent },
  { path: 'add', component: AddUtilisateurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
