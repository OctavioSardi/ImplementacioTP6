import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PedidoComponent } from './components/pedido/pedido.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'pedido', component: PedidoComponent },
      { path: '**', redirectTo: '/inicio', pathMatch: 'full' },
    ]),
  ],
  declarations: [AppComponent, HelloComponent, MenuComponent, InicioComponent],
  bootstrap: [AppComponent],

  //Ref Angular Routieng
})
export class AppModule {}
