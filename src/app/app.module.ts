import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyC01Component } from './myc01';
import { MyC02Component } from './myc02.component';
import { MyC03Component } from './myc03/myc03.component';

@NgModule({
  declarations: [
    AppComponent,
    MyC01Component,
    MyC02Component,
    MyC03Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
