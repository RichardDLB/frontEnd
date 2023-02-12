import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  miPorfolio:any;
  nombre:string ="";

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit():void{
    
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.nombre=data.nombre;
    });
       
  }

}
