/**
 * @angular core
 */
import { Injectable } from '@angular/core';

import Dexie from 'dexie';
import { DexieService } from './dexie.service';

/**
 * Data
 */
// import { Hero } from '../hero';
// import { HEROES } from './mock-heroes';
export interface DXHero {
    id: number;
    name: string;
    avatar: string;
    description: string;
}

export interface HeroWithID extends DXHero {
    id: number;
}

@Injectable()
/**
 * The `HeroService` could get `Hero` data from anywhere
 *      --- a web service, local storage, or a mock data source
 */
export class DXHeroService {
    table: Dexie.Table<HeroWithID, number>;
    constructor(private dexieService: DexieService) {
        this.table = this.dexieService.table('dxheroes');
    }
    getAll() {
        return this.table.toArray();
    }
    add(data: any) {
        return this.table.add(data);
    }
    update(id: number, data: any) {
        return this.table.update(id, data);
    }
    remove(id: number) {
        return this.table.delete(id);
    }
    getInfo(id: number) {
        return this.getAll()
            .then((heroes) => heroes.find(hero => hero.id === id));
    }
}
