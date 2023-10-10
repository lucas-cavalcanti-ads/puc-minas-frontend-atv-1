import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ConteudoItemComponent } from './components/conteudo-item/conteudo-item.component';
import { ConteudoPrincipalComponent } from './components/conteudo-principal/conteudo-principal.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    CabecalhoComponent,
    ConteudoItemComponent,
    ConteudoPrincipalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
