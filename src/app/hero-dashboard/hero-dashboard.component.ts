import { Component, OnInit } from '@angular/core';

import { DXHero, DXHeroService } from './../app-service/core/dxhero.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'hero-dashboard',
    templateUrl: 'hero-dashboard.component.pug',
    styleUrls: ['hero-dashboard.component.scss']
})

export class HeroDashboardComponent implements OnInit {
    constructor(private dxHeroService: DXHeroService) {}
    heroes: DXHero[];
    ngOnInit(): void {
        this.dxHeroService.getAll()
            .then(heroes => this.heroes = heroes);
            // .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}
