import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur.model';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-utilisateurs-list',
  templateUrl: './utilisateurs-list.component.html',
  styleUrls: ['./utilisateurs-list.component.css']
})
export class UtilisateursListComponent implements OnInit{
  utilisateurs?: Utilisateur[];
  currentUtilisateur: Utilisateur = {};
  currentIndex = -1;
  name = '';

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.retrieveUtilisateurs();
  }

  retrieveUtilisateurs(): void {
    this.utilisateurService.getAll()
      .subscribe({
        next: (data) => {
          this.utilisateurs = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveUtilisateurs();
    this.currentUtilisateur = {};
    this.currentIndex = -1;
  }

  setActiveUtilisateur(utilisateur: Utilisateur, index: number): void {
    this.currentUtilisateur = utilisateur;
    this.currentIndex = index;
  }
}
