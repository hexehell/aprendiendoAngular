import { Component } from '@angular/core';


//componente default
@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
 
})
export class ArticuloComponent {
 

  arrArticulos:Articulo[] = [

    new Articulo( {
      Nombre: "Manzana"
      ,Precio_unitario: 35
      ,Cantidad: "1"
      ,Precio_total: 70
      ,Comprado: true
      ,Fecha_registro: new Date()
    }),
    new Articulo( {
      Nombre: "Naranja"
      ,Precio_unitario: 16
      ,Cantidad: "2"
      ,Precio_total: 32
      ,Comprado: false
      ,Fecha_registro: new Date(new Date().getMilliseconds()- 3000)
    }),
    new Articulo( {
      Nombre: "Mango"
      ,Precio_unitario: 30
      ,Cantidad: "1"
      ,Precio_total: 30
      ,Comprado: false
      ,Fecha_registro:  new Date(new Date().getMilliseconds()- 6000)
    }),

   

  ];

  aArticuloMostrado:Articulo;


  

  fnSiguienteArt=()=>
  {
    this.aArticuloMostrado = this.arrArticulos.pop()
  }
}

class Articulo
{
  sNombre:String;
  nPrecio_unitario:number;
  nCantidad:number;
  nPrecio_total:number;
  bComprado:Boolean;
  dFecha_registro:Date; 

  constructor({Nombre: psNombre
              ,Precio_unitario: pnPrecio_unitario
              ,Cantidad: pnCantidad
              ,Precio_total: pnPrecio_total
              ,Comprado: pbComprado
              ,Fecha_registro: pdFecha_registro})
  {
    this.sNombre = psNombre
    this.nPrecio_unitario = pnPrecio_unitario
    this.nCantidad = pnCantidad
    this.nPrecio_total = pnPrecio_total
    this.bComprado = pbComprado
    this.dFecha_registro = pdFecha_registro

  }

  get FechaReg ():string
  {
    return `${this.dFecha_registro.toDateString()} ${this.dFecha_registro.getHours()}:${this.dFecha_registro.getMinutes ()}:${this.dFecha_registro.getSeconds()}` ;

  }


  fnComprado = ()=>{return this.bComprado?"checked":""}

}
