import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root',
})
export class InfopaginaService {
  info: InfoPagina = {};
  equipo: any = {};
  cargada = false;

  constructor(private http: HttpClient) {
    // console.log('Servicio de la infopagina listo');
    this.cargarinfo();
    this.cargarequipo();
}


  private cargarinfo(){

    
    //Leer el archivo JSON
    this.http
      .get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  

  }

  private cargarequipo(){
    this.http.get('https://angular-html-6e141-default-rtdb.firebaseio.com/Equipo.json')
    .subscribe((res: any) => {
      this.equipo = res;
      console.log(res);
    
    });
  }
}
