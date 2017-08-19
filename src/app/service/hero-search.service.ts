import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { Hero } from '../hero';

@Injectable()

export class HeroSearchService {
    constructor(private http: Http) {}
    search(term: string): Observable<Hero[]> {
        return this.http
            .get(`api/heroes/?name=${term}`)
            .map(res => res.json().data as Hero[]);
    }
}
