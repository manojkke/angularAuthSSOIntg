import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { PassingdataComponent } from './passingdata/passingdata.component';


@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    PassingdataComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
