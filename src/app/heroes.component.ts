import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.pug',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  constructor(
      private heroService: HeroService,
      private router: Router
  ) {}
  // title = 'Tour of Heroes';
  title = 'My Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
