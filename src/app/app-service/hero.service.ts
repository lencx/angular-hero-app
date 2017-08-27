/**
 * @angular core
 */
import { Injectable } from '@angular/core';

/**
 * Data
 */
import { Hero } from '../hero';
import { HEROES } from './mock-heroes';

@Injectable()

/**
 * The `HeroService` could get `Hero` data from anywhere
 *      --- a web service, local storage, or a mock data source
 */
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
    // create(attr: Object): Promise<Hero> {
    //     return new Promise(resolve => {

    //     })
    // }
}
