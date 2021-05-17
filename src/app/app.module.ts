import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { ArticuloComponent } from './Articulos/articulo.component';
import { ArticuloModule } from './Articulos/articulo.module';
import { ContadorComponent } from './Contador/contador.component';
import { QuendiComponent } from './PersonajesTolkien/Quendi/Quendi.component';
// import { TiendasComponent } from './tiendas/tiendas.component';
import { TiendasModule } from './tiendas/tiendas.module';




@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    QuendiComponent,
    

   
  ],
  imports: [
    BrowserModule,
    TiendasModule,
    ArticuloModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
