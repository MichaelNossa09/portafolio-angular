import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient) { 

    this.cargarInfo();
    this.cargarEquipo();
  };
  
  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: infoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-c0e0e-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp: any) => {
      this.equipo = resp;
    });
  }
    
  
}


