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

  constructor( private http: HttpClient) { 
    console.log('Servicio de infoPagina listo');
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: infoPagina) => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);
    });
  }
}
