import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
// import { GraficosComponent } from './pages/graficos/graficos.component';
import { FiltrosComponent } from './pages/filtros/filtros.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { VerticalBarComponent } from './pages/graficos-page/vertical-bar/vertical-bar.component';
import { PolarAreaComponent } from './pages/graficos-page/polar-area/polar-area.component';
import { RadarComponent } from './pages/graficos-page/radar/radar.component';

const routes: Routes = [
  //PREGUNTAR A CARLOS, PORQUE EN VIDEO DE PROFE SI QUE DEJA DE ESTA MANERA, PERO A MI DE ESTA MANERA NO ME SALE Y NOSE REALMENTE POR QUE
  // {
  //   path: '',
  //   children: [
  //     {path: 'vertical-bar', component: VerticalBarComponent},
  //     {path: 'polar-area', component: PolarAreaComponent},
  //     {path: 'radar', component: RadarComponent},
  //   ]
  // },


  {path: '', component: LayoutComponent},

  {path: 'vertical-bar', component: VerticalBarComponent},
  {path: 'polar-area', component: PolarAreaComponent},
  {path: 'radar', component: RadarComponent},

  {
    path: 'filtros',
    component: LayoutComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
