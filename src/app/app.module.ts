import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HideandshowComponent } from './hideandshow/hideandshow.component';
import { IftempComponent } from './iftemp/iftemp.component';
import { IfelsetempComponent } from './ifelsetemp/ifelsetemp.component';
import { SwitchtempComponent } from './switchtemp/switchtemp.component';
import { FortempComponent } from './fortemp/fortemp.component';
import { Ifelsetemp2Component } from './ifelsetemp2/ifelsetemp2.component';
import { Switchtemp2Component } from './switchtemp2/switchtemp2.component';
import { Switchtemp3Component } from './switchtemp3/switchtemp3.component';
import { Fortemp2Component } from './fortemp2/fortemp2.component';

@NgModule({
  declarations: [
    AppComponent,
    HideandshowComponent,
    IftempComponent,
    IfelsetempComponent,
    SwitchtempComponent,
    FortempComponent,
    Ifelsetemp2Component,
    Switchtemp2Component,
    Switchtemp3Component,
    Fortemp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
