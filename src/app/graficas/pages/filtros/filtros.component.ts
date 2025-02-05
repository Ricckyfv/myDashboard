import { Component, EventEmitter, Output } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent {
  public meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public tipos = ['Ganancias', 'Perdidas'];
  public selectedMonth: string = '';
  public selectedType: string = '';

  @Output() filterChange = new EventEmitter<{ month: string, type: string }>();

  aplicarFiltro() {
    this.filterChange.emit({ month: this.selectedMonth, type: this.selectedType });
  }
}


