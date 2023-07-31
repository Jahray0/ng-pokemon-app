import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurvolDirective } from './survol.directive';

//module racine de l'application
//ou on importe les composants

@NgModule({
  declarations: [
    AppComponent,
    SurvolDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //premier composant à charger
})
export class AppModule { }
