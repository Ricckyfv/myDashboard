import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  private apiUrl = 'http://localhost:3000/graficos'; // URL del backend

  constructor(private http: HttpClient) {}

  obtenerDatos(mes?: string, tipo?: string): Observable<any> {
      let params: any = {};

      if (mes) {
        params.mes = mes;
      }
      if (tipo) {
        params.tipo = tipo;
      }

      return this.http.get<any>(this.apiUrl, { params });
    }
}
