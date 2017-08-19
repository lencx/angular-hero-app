import { AppComponent } from '../app-main/app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppMdModule } from './app-md.module';
import { ImageUploadModule } from '../img-upload';

import { AppRoutingModule } from '../app-main/app-routing.module';
import { HeroService } from '../service/hero.service';
import { ComponentModule } from './app-component.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../service/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponentModule
  ],
  imports: [
    BrowserModule,
    AppMdModule,
    NoopAnimationsModule,
    FormsModule,
    HttpModule,
    ImageUploadModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  exports: [AppMdModule],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
