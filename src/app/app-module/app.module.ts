/**
 * @angular core
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

/**
 * Component
 * Module
 */
import { AppMdModule } from './app-md.module';
import { AppComponent } from '../app-main/app.component';
import { ComponentModule } from './app-component.module';
import { HeroService } from '../app-service/hero.service';
import { HeroRouting } from './app-routing.module';
import { DXHeroService } from './../app-service/core/dxhero.service';
import { CoreModule } from './../app-service/core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponentModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    HttpModule,
    AppMdModule,
    HeroRouting,
    CoreModule
  ],
  exports: [AppMdModule],
  providers: [HeroService, DXHeroService],
  bootstrap: [AppComponent]
})


export class AppModule { }
