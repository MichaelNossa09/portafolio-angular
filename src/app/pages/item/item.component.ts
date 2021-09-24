import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/productos.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id : string = ""; 
  producto : any;

  constructor( private route:ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit(){
    
    this.route.params
    .subscribe( parametros =>{
      this.productoService.getProducto(parametros['id'])
      .subscribe((producto: ProductoDescripcion)=>{
        this.id = parametros['id'];
        this.producto = producto;

      });
    })

  }

}
