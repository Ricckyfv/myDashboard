import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  private apiUrl = 'http://localhost:3000/graficos'; // URL del backend

  constructor(private http: HttpClient) {}

  obtenerDatos(mes?: string, tipo?: string, anio?: string, minimo?:string, maximo?:string): Observable<any> {
      let params: any = {};

      if (mes) {
        params.mes = mes;
      }
      if (tipo) {
        params.tipo = tipo;
      }
      if (anio) {
        params.anio = anio;
      }


      if (minimo) {
        params.minimo = minimo;
      }
      if (maximo) {
        params.maximo = maximo;
      }

      return this.http.get<any>(this.apiUrl, { params });
    }

}
