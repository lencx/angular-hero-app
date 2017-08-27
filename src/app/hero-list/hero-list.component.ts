/**
 * @angular core
 */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { MdSort, MdPaginator, MdTableModule } from '@angular/material';
/**
 * inject service
 */
import { DXHeroService, DXHero, HeroWithID } from './../app-service/core/dxhero.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'hero-list',
    templateUrl: './hero-list.component.pug',
    styleUrls: ['./hero-list.component.scss']
})

export class HeroListComponent implements OnInit {
    dxHeroList: Array<HeroWithID> = [];
    selectedHero: DXHero;
    heroes: DXHero[];

    constructor(
        // private heroService: HeroService,
        private dxHeroService: DXHeroService,
        private router: Router,
    ) { }
    ngOnInit(): void {
        // this.getHeroes();
        this.getDXHero();
    }
    onSelect(hero: DXHero): void {
        this.selectedHero = hero;
        // console.log(hero);
    }
    goHeroDetail(id): void {
        // console.log(this.selectedHero, id);
        this.router.navigate(['/detail', id]);
    }

    /**
     * Get indexedDB all data (usage dexie.js)
     */
    getDXHero(): void {
        this.dxHeroService.getAll()
            .then((heroes: Array<HeroWithID>) => this.heroes = heroes);
    }

}




// https://stackoverflow.com/questions/45014257/how-to-use-md-table-with-services-in-angular-4




// import { Component, ViewChild, OnInit } from '@angular/core';
// import { DataSource } from '@angular/cdk';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { MdTableModule, MdPaginator } from '@angular/material';
// import { Observable } from 'rxjs/Observable';

// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/observable/merge';
// import 'rxjs/add/operator/map';

// import { DXHeroService, DXHero, HeroWithID } from './../app-service/core/dxhero.service';

// @Component({
//     // tslint:disable-next-line:component-selector
//     selector: 'hero-list',
//     templateUrl: './hero-list.component.pug'
// })

// export class HeroListComponent implements OnInit {
//     displayedColumns = ['id', 'name', 'description'];
//     heroDatabase = new HeroDatabase();
//     dataSource: HeroDataSource | null;
//     // heroes: DXHero[];

//     constructor(private dxHeroService: DXHeroService) { }

//     @ViewChild(MdPaginator) paginator: MdPaginator;

//     // tslint:disable-next-line:use-life-cycle-interface
//     ngOnInit() {
//         // this.dxHeroService.getAll().then(a => {
//         //     console.log(a);
//         //     return a;
//         // });
//         this.dataSource = new HeroDataSource(this.dxHeroService, this.paginator);
//     }
//     // getDXHero() {
//     //     // console.log(this);
//     //     this.dxHeroService.getAll()
//     //         .then((heroes: Array<HeroWithID>) => this.heroes = heroes);
//     //         // this.dataChange.next(heroes);
//     // }
// }

// export class HeroDatabase {
//     constructor() {
//         this.getDXHero();
//     }
//     dataChange: BehaviorSubject<DXHero[]> = new BehaviorSubject<DXHero[]>([]);
//     get data(): DXHero[] { return this.dataChange.value; }

//     dxHeroService: DXHeroService;
//     getDXHero() {
//         console.log(this);
//         const tt = [{
//             id: '1',
//             name: 'len',
//             avatar: 'sasa',
//             description: '12123'
//         }, {
//             id: '2',
//             avatar: 'sasa',
//             name: 'lenss',
//             description: '12123asas'
//         }];
//         this.dataChange.next(tt);
//     }
// }

// export class HeroDataSource extends DataSource<any> {
//     constructor(
//         private _dxHeroService: DXHeroService,
//         private _paginator: MdPaginator
//     ) {
//         super();
//     }

//     connect(): Observable<DXHero[]> {
//         // console.log('service', this._dxHeroService);
//         const displayDataChanges = [
//             this._dxHeroService.getAll()
//                 .then((heroes: Array<HeroWithID>) => heroes),
//             this._paginator.page
//         ];

//         return Observable.merge(...displayDataChanges)
//             .map((data, page) => {
//                 // console.log(data);
//                 const cloneData = data.slice();
//                 const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
//                 return data.splice(startIndex, this._paginator.pageSize);
//                 // const data = this._heroDatabase.data.slice();
//                 // return data.splice(startIndex, this._paginator.pageSize);
//             });
//     }
//     disconnect() { }
// }
