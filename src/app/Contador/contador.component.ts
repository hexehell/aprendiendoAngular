import { Component } from '@angular/core';


//componente default
@Component({
    selector: 'app-contador',
    //   templateUrl: './app.component.html',//se ignora el templateurl si no esta1
 
    template: `
        <h1> {{ titulo}}</h1>
        <h3>Incremento: <strong>{{incremento}}</strong></h3>
        <button (click)="fnAcumular(incremento);">+{{incremento}}</button>
        <span>{{numero}}</span>
        <button (click)="fnAcumular(-incremento);">-{{incremento}}</button>
        
  `,//si esta el templateurl se ignora el template 
})
export class ContadorComponent {
    public titulo = 'Contador';
    public numero: number = 10;
    incremento: number = 2;

    fnAcumular(pnValor: number) {
        this.numero += pnValor;

    }

}
