import { Component, Input, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur.model';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-utilisateur-details',
  templateUrl: './utilisateur-details.component.html',
  styleUrls: ['./utilisateur-details.component.css']
})
export class UtilisateurDetailsComponent implements OnInit{
  @Input() viewMode = false;
  @Input() currentUtilisateur: Utilisateur = {
    name: '',
    firstname: '',
    username: '',
    password: ''
  };

  message = '';

  constructor(
    private utilisateurService: UtilisateurService,
    private route: ActivatedRoute,
    private router: Router) { }
  

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getUtilisateur(this.route.snapshot.params["id"]);
    }
  }

  getUtilisateur(id: string): void {
    this.utilisateurService.get(id)
      .subscribe({
        next: (data) => {
          this.currentUtilisateur = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  deleteTutorial(): void {
    this.utilisateurService.delete(this.currentUtilisateur.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/utilisateurs']);
        },
        error: (e) => console.error(e)
      });
  }

  updateTutorial(): void {
    this.message = '';

    this.utilisateurService.update(this.currentUtilisateur.id, this.currentUtilisateur)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This user was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
}
