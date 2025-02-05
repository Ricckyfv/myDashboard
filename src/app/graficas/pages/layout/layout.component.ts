import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

  public data: any;
  public options: any;

  constructor(private graficosService: GraficasService) {}

  ngOnInit() {
    this.cargarDatos(); // Cargar datos iniciales
  }

  cargarDatos(mes?: string, tipo?: string) {
    this.graficosService.obtenerDatos(mes, tipo).subscribe(response => {
      this.data = response;
    });
  }

  aplicarFiltro(filtro: { month: string, type: string }) {
    this.cargarDatos(filtro.month, filtro.type);
  }

}
