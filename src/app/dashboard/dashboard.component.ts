import { Component, OnInit, NgModule } from '@angular/core';

import { HeroService } from '../service/hero.service';
import { Hero } from '../hero';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.pug',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
    constructor(private heroService: HeroService) {}
    heroes: Hero[] = [];
    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }
}
