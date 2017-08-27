import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { DXHeroService, DXHero } from './../core/service/dxhero.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.pug',
    styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {
    hero: DXHero;

    constructor(
        private dxHeroService: DXHeroService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.dxHeroService.getInfo(+params.get('id'))).subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        const data = {
            name: this.hero.name,
            avatar: this.hero.avatar,
            description: this.hero.description
        };
        this.dxHeroService.update(this.hero.id, data);
        this.router.navigate(['/heroes']);
    }
}
