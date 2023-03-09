import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-pencil-text-presentation',
  templateUrl: './pencil-text-presentation.component.html',
  styleUrls: ['./pencil-text-presentation.component.css']
})
export class PencilTextPresentationComponent implements OnInit {

  miPorfolio:any;

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit():void{

    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
    }); 
       
  }

}
