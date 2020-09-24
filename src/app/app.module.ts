import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstRowComponent } from './first-row/first-row.component';
import { SecondRowComponent } from './second-row/second-row.component';
import { ThirdRowComponent } from './third-row/third-row.component';
import { FourthRowComponent } from './fourth-row/fourth-row.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    FirstRowComponent,
    SecondRowComponent,
    ThirdRowComponent,
    FourthRowComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
