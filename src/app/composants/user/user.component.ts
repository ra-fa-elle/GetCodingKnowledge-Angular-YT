import { Component, OnInit } from '@angular/core';
import { DonneesService } from '../../services/donnees.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // création des variables dynamiques au dessus du constructeur
  nom: string;
  age: number; 
  email: string;
  hobby: hobby;

  constructor(private donnees: DonneesService) { 
    this.nom = 'Raph';
    this.age = 28;
    this.email = "raph@mail.fr";

    this.hobby = {
      hobby1: 'photo',
      hobby2: 'yoga',
      hobby3: 'FBI'
    }
  }

  ngOnInit(): void {
  }

  onClick() {
    alert('Aucune info supplémentaire pour le moment..');
  }
}

  // création de l'interface Hobby
  interface hobby {
    hobby1: string;
    hobby2: string;
    hobby3: string;
  }
