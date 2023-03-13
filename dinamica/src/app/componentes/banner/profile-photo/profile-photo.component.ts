import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.css']
})
export class ProfilePhotoComponent implements OnInit {

  miPorfolio:any;

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit():void{
    
    this.datosPorfolio.obtenerDatos().subscribe(data =>{

      this.miPorfolio=data;

    });
       
  }

}

