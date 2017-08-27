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
    add(data) {
        return this.table.add(data);
    }
    update(id, data) {
        return this.table.update(id, data);
    }
    remove(id) {
        return this.table.delete(id);
    }
    getId(id) {
        console.log(id);
    }
}
