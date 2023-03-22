import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SendMatchesService } from './send-matches.service';
import { HttpClientModule } from '@angular/common/http';
import { BracketComponent } from './bracket/bracket.component';

@NgModule({
  declarations: [
    AppComponent,
    BracketComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatTableModule,
    HttpClientModule,
    BrowserAnimationsModule
     
    
  ],
  providers: [SendMatchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
