import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
[x: string]: any;
  
  // instanciamos la variable education para poder traer el array
  educationList: any = [];
  miPorfolio: any;  


  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit():void{

    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.educationList=data.education;
      this.miPorfolio=data;
    });

   
     
  }

}
