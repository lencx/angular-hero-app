import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material';

import { HeroService } from '../service/hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.pug',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private router: Router
    ) {
        this.sortedData = this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice());
    }
    title = 'My Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    sortedData;
    getHeroes(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    imageUploaded(file) {
        console.log(JSON.stringify(file));
    }
    uploadStateChange(state: boolean) {
        console.log(JSON.stringify(state));
    }
    imageRemoved(e) {
        console.log('del:', e);
    }

    // hero list sort
    sortData(sort: Sort) {
        const data = this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice());

        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }

        this.sortedData = this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice().sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'id': return compare(a.id, b.id, isAsc);
                case 'name': return compare(a.name, b.name, isAsc);
                default: return 0;
            }
            }));

        function compare(a, b, isAsc) {
            return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
        }
        }

    // hero add
    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .then(hero => {
            this.heroes.push(hero);
            this.selectedHero = null;
            });
        }
    del(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if (this.selectedHero === hero) {
                this.selectedHero = null;
            }
            });
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
