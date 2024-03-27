import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import {helper} from "./helper/helper";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DisplayDataComponent } from './display-data/display-data.component';
@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    DisplayDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [helper],
  bootstrap: [AppComponent]
})
export class AppModule { }
