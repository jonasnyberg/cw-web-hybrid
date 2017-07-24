import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Hello2Component } from './hello2/hello2.component';
import {UpgradeModule} from '@angular/upgrade/static';
import {RouterModule, UrlHandlingStrategy} from '@angular/router';
import {AppRouting} from './app.routing';
import {Ng1Ng2UrlHandlingStrategy} from './app-url-handling-strategy';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    Hello2Component
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    RouterModule,
    AppRouting
  ],
  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: UrlHandlingStrategy,
      useClass: Ng1Ng2UrlHandlingStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
