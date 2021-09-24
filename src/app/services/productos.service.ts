import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/productos.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos:  any[] = [];
  cargando = true;

  constructor(private http: HttpClient ) {
    
    this.cargarProductos();
  }

  private cargarProductos(){

    this.http.get('https://angular-html-c0e0e-default-rtdb.firebaseio.com/productos_idx.json')
            .subscribe( (resp: any) =>{

              console.log(resp);
              this.productos=resp;
              this.cargando=false;
              
            });

  }
}
