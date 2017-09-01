import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { DXHero, DXHeroService } from './../core/service/dxhero.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'hero-dashboard',
    templateUrl: 'hero-dashboard.component.pug',
    styleUrls: ['hero-dashboard.component.scss']
})

export class HeroDashboardComponent implements OnInit {
    constructor(
        private dxHeroService: DXHeroService,
        private router: Router
    ) {}
    heroes: DXHero[];
    ngOnInit(): void {
        this.dxHeroService.getAll()
            .then(heroes => this.heroes = heroes);
    }
    goHeroDetail(id: number): void {
        // console.log(this.selectedHero, id);
        this.router.navigate(['/detail', id]);
    }
}
