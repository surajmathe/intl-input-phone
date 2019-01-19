import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IntlInputPhoneModule } from 'intl-input-phone';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IntlInputPhoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
