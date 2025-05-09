import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicTacToeModule } from './tic-tac-toe/tic-tac-toe.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TicTacToeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
