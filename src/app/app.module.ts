import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';




// //primeNg
// import {ButtonModule} from 'primeng/button';
// import {CardModule} from 'primeng/card';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    SharedModule,
    VentasModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
