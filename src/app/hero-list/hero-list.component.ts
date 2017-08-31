/**
 * @angular core
 */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { MdSort, MdPaginator, MdTableModule } from '@angular/material';
import { PageEvent, Sort } from '@angular/material';
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

    // heroes sort
    sortedData: any;

    // heroes paginator
    statesPage: Array<HeroWithID> = [];
    heroesLen: number;
    pageSize = 5;
    pageSizeOptions = [5, 10, 15];

    constructor(
        private dxHeroService: DXHeroService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getDXHero();
    }

    // Selected hero
    onSelect(hero: DXHero): void {
        this.selectedHero = hero;
        // console.log(hero);
    }

    // Go to the hero detail page
    goHeroDetail(id: number): void {
        // console.log(this.selectedHero, id);
        this.router.navigate(['/detail', id]);
    }

    // Remove the hero
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
            .then((heroes: Array<HeroWithID>) => {
                this.dxHeroList = heroes;
                this.statesPage = heroes.slice(0, this.pageSize);
                this.heroesLen = heroes.length;
            });
    }

    /**
     * Paginator
     * @param {Object} - pageIndex, pageSize, length
     */
    paginatorEvent(_evt: PageEvent): void {
        // console.log(_evt);
        const tmp = this.dxHeroList;
        const start = _evt.pageIndex * _evt.pageSize;
        this.statesPage = tmp.slice(start, start + _evt.pageSize);
    }

    /**
     * Sort
     * @param {Object} - Material Sort
     */
    sortData(sort: Sort) {
        // console.log(sort);
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
