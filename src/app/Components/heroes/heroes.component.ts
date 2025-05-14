import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { Hero } from '../../Models/hero';
import { HEROES } from '../../Models/MockModels/mock-heroes';
import { FormsModule } from '@angular/forms';
  
@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes = HEROES;

  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  };
}
