import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoEquipo } from '../interfaces/equipo-pagina.interface';

@Injectable({
  providedIn: 'root',
})
export class InfopaginaService {
  info: InfoPagina = {};
  equipo: InfoEquipo = {};
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
        console.log(resp);
      });
  

  }

  private cargarequipo(){
    this.http.get('assets/data/data-equipo.json')
    .subscribe((res: InfoEquipo) => {
      this.equipo = res;
      console.log(res);
    
    });
  }
}
