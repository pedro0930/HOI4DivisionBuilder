import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgbModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'zh-Hant' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
