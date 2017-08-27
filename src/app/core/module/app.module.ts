/**
 * @angular core
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpModule } from '@angular/http';

/**
 * Component
 * Module
 */
import { AppMdModule } from './app-md.module';
import { AppComponent } from './../component/app.component';
import { ComponentModule } from './app-component.module';
import { HeroRouting } from './app-routing.module';
import { DXHeroService } from './../service/dxhero.service';
import { CoreModule } from './../service/core.module';

import { SearchPipe } from './../pipe/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponentModule,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    // HttpModule,
    AppMdModule,
    HeroRouting,
    CoreModule
  ],
  exports: [AppMdModule],
  providers: [DXHeroService],
  bootstrap: [AppComponent]
})


export class AppModule { }
