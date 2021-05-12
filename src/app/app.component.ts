import { Component } from '@angular/core';


//componente default
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//se ignora el templateurl si no esta1
  styleUrls: ['./app.component.css'],
  template: `<h1>tu mama</h1>`,//si esta el templateurl se ignora el template 
})
export class AppComponent {
  public titulo = 'Contador';
  public numero:number = 10;
  incremento:number =2;

  fnAcumular(pnValor:number)
  {
    this.numero += pnValor;

  }

}
