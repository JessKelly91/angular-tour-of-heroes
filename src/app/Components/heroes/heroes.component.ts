import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { Hero } from '../../Models/hero';
import { HEROES } from '../../Models/mock-heroes';
import { FormsModule } from '@angular/forms';
  
@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  //hero: Hero = {
  //  id: 1,
  //  name: 'Windstorm'
  //}

  heroes = HEROES;

  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  };
}
