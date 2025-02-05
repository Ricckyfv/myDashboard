import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficasRoutingModule } from './graficas-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { FiltrosComponent } from './pages/filtros/filtros.component';
import { VerticalBarComponent } from './pages/graficos-page/vertical-bar/vertical-bar.component';
import { PolarAreaComponent } from './pages/graficos-page/polar-area/polar-area.component';
import { RadarComponent } from './pages/graficos-page/radar/radar.component';





@NgModule({
  declarations: [
    LayoutComponent,
    FormularioComponent,
    FiltrosComponent,
    VerticalBarComponent,
    PolarAreaComponent,
    RadarComponent,

  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
    FormsModule


  ]
})
export class GraficasModule { }
