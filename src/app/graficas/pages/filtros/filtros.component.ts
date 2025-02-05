import { Component, EventEmitter, Output } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent {

 /* public meses = ['','Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre'];
  public tipos = ['Ganancias', 'Perdidas'];
  public anios = ['2022', '2023', '2024'];
  */
  public selectedMonth: string = '';
  public selectedType: string = '';
  public selectedAnio: string= '';

public meses = [
  { label: 'Todos los meses', value: '' },  // Opción para todos los meses
  { label: 'Enero', value: 'Enero' },
  { label: 'Febrero', value: 'Febrero' },
  { label: 'Marzo', value: 'Marzo' },
  { label: 'Abril', value: 'Abril' },
  { label: 'Mayo', value: 'Mayo' },
  { label: 'Junio', value: 'Junio' },
  { label: 'Julio', value: 'Julio' },
  { label: 'Agosto', value: 'Agosto' },
  { label: 'Septiembre', value: 'Septiembre' },
  { label: 'Octubre', value: 'Octubre' },
];

public tipos = [
  { label: 'Ambos', value: '' },
  { label: 'Ganancias', value: 'Ganancias' },
  { label: 'Perdidas', value: 'Perdidas' }
];

public anios = [
  { label: 'Todos los años', value: '' },
  { label: '2022', value: '2022' },
  { label: '2023', value: '2023' },
  { label: '2024', value: '2024' }
];


  @Output() filterChange = new EventEmitter<{ month: string, type: string, year: string}>();

  aplicarFiltro() {
    this.filterChange.emit({
      month: this.selectedMonth,
      type: this.selectedType,
      year: this.selectedAnio,
     });
  }

}





