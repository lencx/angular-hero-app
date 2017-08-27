import { DXHeroService } from './../app-service/core/dxhero.service';
import { HeroService } from './../app-service/hero.service';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
// import { Component, OnInit } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

import 'rxjs/add/operator/switchMap';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.pug',
    styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {
    // @Input() hero: Hero;
    hero: Hero;
    constructor(
        private heroService: HeroService,
        private dxHeroService: DXHeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }
    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id'))).subscribe(hero => this.hero = hero);
        // this.route.paramMap
    }
    goBack(): void {
        this.location.back();
    }
}

// export class HeroDetailComponent implements OnInit {
//     hero: Hero;
//     ngOnInit() {

//     }
// }
