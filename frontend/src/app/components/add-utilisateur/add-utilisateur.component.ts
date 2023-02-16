import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur.model';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.css']
})
export class AddUtilisateurComponent implements OnInit{
  
  utilisateur: Utilisateur = {
    name: '',
    firstname: '',
    username: '',
    password: ''
  };
  submitted = false;

  constructor(private utilisateurService: UtilisateurService){}

  ngOnInit(): void {}

  saveUtilisateur(): void {
    const data = {
      name: this.utilisateur.name,
      firstname: this.utilisateur.firstname,
      username: this.utilisateur.username,
      password: this.utilisateur.password
    };

    this.utilisateurService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newUtilisateur(): void {
    this.submitted = false;
    this.utilisateur = {
      name: '',
      firstname: '',
      username: '',
      password: ''
    };
  }
}
