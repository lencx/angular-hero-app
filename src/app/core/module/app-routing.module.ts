/**
 * @angular core
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Component
 */
import { HeroDetailComponent } from './../../hero-detail/hero-detail.component';
import { HeroDashboardComponent } from './../../hero-dashboard/hero-dashboard.component';
import { HeroListComponent } from './../../hero-list/hero-list.component';
import { HeroAddComponent } from './../../hero-add/hero-add.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: HeroListComponent
    },
    {
        path: 'dashboard',
        component: HeroDashboardComponent
    },
    {
        path: 'add',
        component: HeroAddComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class HeroRouting { }
