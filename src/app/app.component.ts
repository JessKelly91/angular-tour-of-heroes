import { Component } from '@angular/core';
import { HeroesComponent } from './Components/heroes/heroes.component'

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
