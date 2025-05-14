import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { Hero } from '../../Models/hero';
import { HeroService } from '../../Services/Hero/hero.service';
import { MessageService } from '../../Services/Message/message.service';

//inject HeroService and call getHeroes for heroes = 
  
@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {
  };

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  };

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }


}
