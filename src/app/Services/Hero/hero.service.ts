import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../../Models/hero';
import { HEROES } from '../../Models/MockModels/mock-heroes';
import { MessageService } from '../Message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MessageService) {

  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);

    this.messageService.add('HeroService: fetched heroes');

    return heroes;
  };

}
