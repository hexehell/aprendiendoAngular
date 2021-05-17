import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { TiendasComponent } from './tiendas.component';
import { ArticuloComponent } from './articulo.component';


@NgModule({

    declarations:[ArticuloComponent],
    exports:[ ArticuloComponent],
    imports:[ CommonModule]
})
export class ArticuloModule
{}