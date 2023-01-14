import { Component } from '@angular/core';
import { InfopaginaService } from 'src/app/services/infopagina.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
constructor(public _service: InfopaginaService){

}
}
