import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IronManComponent } from './iron-man/iron-man.component';
import { ThorComponent } from './thor/thor.component';
import { HulkComponent } from './hulk/hulk.component';

@NgModule({
  declarations: [
    AppComponent,
    IronManComponent,
    ThorComponent,
    HulkComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
