/**
 * @angular core
 */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

/**
 * inject service
 */
import { Hero } from '../hero';
// import { HeroService } from '../app-service/hero.service';
import { DXHeroService, DXHero, HeroWithID } from './../app-service/core/dxhero.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'hero-list',
    templateUrl: './hero-list.component.pug',
    styleUrls: ['./hero-list.component.scss']
})

export class HeroListComponent implements OnInit {
    dxHeroList: Array<HeroWithID> = [];
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    constructor(
        // private heroService: HeroService,
        private router: Router,
        private dxHeroService: DXHeroService
    ) { }
    ngOnInit(): void {
        // this.getHeroes();
        this.getDXHero();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        console.log(hero);
    }
    // getHeroes(): void {
    //     this.heroService.getHeroes()
    //         .then(heroes => this.heroes = heroes);
    // }
    goHeroDetail(): void {
        console.log(this.selectedHero);
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    /**
     * Get indexedDB all data (usage dexie.js)
     */
    getDXHero(): void {
        this.dxHeroService.getAll()
            .then((heroes: Array<HeroWithID>) => this.heroes = heroes);
    }

    onAddHeroInfo(hero: DXHero) {
        const heroInfo = {
            name: hero.name.trim(),
            avatar: hero.avatar,
            description: hero.description.trim()
        };
        if (!heroInfo.name) {
            alert('name is null');
            return;
        }
        if (!heroInfo.avatar) {
            alert('select image');
            return;
        }
        if (!heroInfo.description) {
            alert('description is null');
            return;
        }
        this.dxHeroService
            .add(heroInfo)
            .then(id => {
                console.log(heroInfo);
                this.dxHeroList = [...this.dxHeroList, Object.assign({}, heroInfo, { id })];
            });
    }
}
