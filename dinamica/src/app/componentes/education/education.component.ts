import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
[x: string]: any;
  
  educationList: any; 
  miPorfolio: any;  


  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit():void{

    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.educationList=data.education;
    });

    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
    });
     
  }

}
