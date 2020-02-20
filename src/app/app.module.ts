import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTopComponent } from './Components/Blocks/menu-top/menu-top.component';
import { MenuMidComponent } from './Components/Blocks/menu-mid/menu-mid.component';
import { MenuBotComponent } from './Components/Blocks/menu-bot/menu-bot.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTopComponent,
    MenuMidComponent,
    MenuBotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
