import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion-experiencia',
  templateUrl: './informacion-experiencia.component.html',
  styleUrls: ['./informacion-experiencia.component.css']
})
export class InformacionExperienciaComponent {

  experiencias = {
    empresa: "Portal Web de Noticias NTN24",
    cargo: "Redactor Web",
    fechaIni: "01-02-2012",
    fechaFin: "12-12-2012"
  }

}
