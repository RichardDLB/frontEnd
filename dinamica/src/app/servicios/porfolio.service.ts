import { Injectable } from '@angular/core';
// suscribirse a los datos que viene del json
import { HttpClient } from '@angular/common/http';
// hacer peticion y CRUD
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  // http es el alias para poder utilizar a HttpClient 
  constructor(private http:HttpClient) { }
 
  // metodo observable que devuelve datos
  obtenerDatos(): Observable<any>{

    // retorno de datos utilizando el metodo get en HttpCient, que llama a la base de datos JSON o a una url 
    return this.http.get('./assets/data/data.json');

  }
}
