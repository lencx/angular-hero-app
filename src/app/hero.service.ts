import 'rxjs/add/operator/toPromise';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class HeroService {
    constructor(private http: Http) {}
    private heroesUrl = 'api/heroes';
    private handleError(err: any): Promise<any> {
        console.error('An error occurred', err);
        return Promise.reject(err.massage || err);
    }
    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(res => res.json().data as Hero[])
            .catch(this.handleError);
    }
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(res => res.json().data as Hero);
    }
}
