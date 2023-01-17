import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoInteface } from '../interfaces/producto.inteface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  cargando = true;
  constructor(private http: HttpClient) {

    this.cargarProductos();

    } 


   
    private cargarProductos(){

      this.http.get('https://angular-html-6e141-default-rtdb.firebaseio.com/productos_idx.json')
            .subscribe((respu: any )  => {
              //this.productos = respu;
              console.log(respu);
              this.cargando = false
      });

    }

}
