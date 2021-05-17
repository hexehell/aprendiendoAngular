import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TiendasComponent } from './tiendas.component';


@NgModule({

    declarations:[TiendasComponent],
    exports:[ TiendasComponent],
    imports:[ CommonModule]
})
export class TiendasModule
{}