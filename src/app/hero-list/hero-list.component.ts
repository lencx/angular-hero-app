/**
 * @angular core
 */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { MdSort, MdPaginator, MdTableModule } from '@angular/material';
import { Sort } from '@angular/material';
/**
 * inject service
 */
import { DXHeroService, DXHero, HeroWithID } from './../core/service/dxhero.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'hero-list',
    templateUrl: './hero-list.component.pug',
    styleUrls: ['./hero-list.component.scss']
})

export class HeroListComponent implements OnInit {
    dxHeroList: Array<HeroWithID> = [];
    selectedHero: DXHero;
    sortedData: any;

    constructor(
        private dxHeroService: DXHeroService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.getDXHero();
    }
    onSelect(hero: DXHero): void {
        this.selectedHero = hero;
        // console.log(hero);
    }
    goHeroDetail(id: number): void {
        // console.log(this.selectedHero, id);
        this.router.navigate(['/detail', id]);
    }

    delHero(id: number): void {
        this.dxHeroService.remove(id)
            .then(() => this.dxHeroList = this.dxHeroList
                .filter(hero => hero.id !== id));
    }

    /**
     * Get indexedDB all data (usage dexie.js)
     */
    getDXHero(): void {
        this.dxHeroService.getAll()
            .then((heroes: Array<HeroWithID>) => this.dxHeroList = heroes);
    }

    sortData(sort: Sort) {
        const data = this.dxHeroService.getAll()
            .then(heroes => this.dxHeroList = heroes.slice());

        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }

        this.sortedData = this.dxHeroService.getAll()
            .then(heroes => this.dxHeroList = heroes.slice().sort((a, b) => {
                const isAsc = sort.direction === 'asc';
                switch (sort.active) {
                    case 'id': return this.compare(a.id, b.id, isAsc);
                    case 'name': return this.compare(a.name, b.name, isAsc);
                    default: return 0;
                }
            }));
    }

    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}


// https://stackoverflow.com/questions/45014257/how-to-use-md-table-with-services-in-angular-4
