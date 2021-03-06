import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PhotosModule} from "./photo/photo.module";
import {AppRoutingModule} from "./app.routing.module";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CardComponent} from "./shared/components/card/card.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
