import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-text-banner',
  templateUrl: './text-banner.component.html',
  styleUrls: ['./text-banner.component.css']
})
export class TextBannerComponent implements OnInit {

  miPorfolio:any;

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit():void{
    
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      
      this.miPorfolio=data;

    });
       
  }

}

