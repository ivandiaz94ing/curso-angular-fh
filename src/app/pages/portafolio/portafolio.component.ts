import { Component } from '@angular/core';
import { ProductoInteface } from 'src/app/interfaces/producto.inteface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

constructor(public _service: ProductosService) {
  
}
}
