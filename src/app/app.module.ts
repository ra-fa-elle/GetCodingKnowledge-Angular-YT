import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './composants/user/user.component';
// import du module de formulaire
import { FormsModule } from '@angular/Forms';
import { DonneesService } from './services/donnees.service';

@NgModule({
  // les composants vont dans declarations
  declarations: [
    AppComponent,
    UserComponent
  ],
  // les modules vont dans imports
  imports: [
    BrowserModule,
    FormsModule
  ],
  // les services vont dans providers
  providers: [DonneesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Ce fichier se change automatiquement lorsque l'on fait des changements :
// Ce fichier sert à faire les importations :
// On doit le signaler dans le @NgModule.