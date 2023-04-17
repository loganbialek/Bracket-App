import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SendMatchesService } from './send-matches.service';
import { HttpClientModule } from '@angular/common/http';
import { HelloWorldService } from './hello-world.service';
import { CreateBracketService } from './create-bracket.service';
import { AwsComponent } from './aws/aws.component';
import { AngularComponent } from './angular/angular.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AwsComponent,
    AngularComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatTableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
    
  ],
  providers: [
    SendMatchesService,
    HelloWorldService,
    CreateBracketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
