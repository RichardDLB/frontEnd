import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-text-presentation',
  templateUrl: './text-presentation.component.html',
  styleUrls: ['./text-presentation.component.css']
})
export class TextPresentationComponent  implements OnInit {

  miPorfolio:any;

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit():void{

    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.miPorfolio=data;
    }); 
       
  }

}
