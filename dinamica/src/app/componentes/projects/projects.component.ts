import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  miPorfolio:any;

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit():void{

    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      
      this.miPorfolio=data.projectsList;
    });    
  }

}
