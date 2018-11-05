import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule, APP_INITIALIZER } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from './translate.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TranslatePipe } from './translate.pipe';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [ AppComponent, TranslatePipe],
  imports: [ BrowserModule, NgbModule, HttpClientModule ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
