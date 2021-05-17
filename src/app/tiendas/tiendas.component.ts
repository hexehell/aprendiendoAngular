import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit {

  sTiendaBorrada:string = "";

  Tiendas:Tienda[] = 
  [
    new Tienda(
      {
        Nombre: "Smart",
        Direccion: "Av. Tecnologico # 8503, Tierra y Libertad, 31126 Chihuahua, Chih.",
        Alias: "Smart La Villa"


      }),

      new Tienda(
        {
          Nombre: "Soriana",
          Direccion: "Universidad Carlos Guízar 080190001097-D, Magisterial Universidad, 31200 Chihuahua",
          Alias: "Soriana Universidad"
  
  
        }),
        
      new Tienda(
        {
          Nombre: "AlSuper",
          Direccion: "Av. Universidad, Av División del Nte y, Altavista, 31030 Chih.",
          Alias: "AlSuper Universidad"
  
  
        }),

  ]

  fnBorrar = ()=>
  {
    let tTienda = this.Tiendas.pop();

    // console.log("Borrando: " +tTienda.sNombre);

    this.sTiendaBorrada = tTienda? tTienda.sNombre: 'no hay elementos para borrar';

  }

  //el constructor se ejecuta primero que el ngOnInit
  constructor() { }

  ngOnInit(): void {
  }

}


class Tienda
{
  sNombre:string;
  sDireccion:string;
  sAlias:string;

  constructor({Nombre: psNombre,Direccion: psDireccion, Alias: psAlias})
  {
    this.sNombre = psNombre;
    this.sDireccion = psDireccion;
    this.sAlias = psAlias;


  }

}
