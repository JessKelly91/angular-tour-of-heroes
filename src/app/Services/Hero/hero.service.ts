import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../Models/hero';
import { HEROES } from '../Models/MockModels/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  };

}
