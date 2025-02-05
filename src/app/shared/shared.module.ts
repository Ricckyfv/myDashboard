import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';
import { GraficasModule } from '../graficas/graficas.module';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    RouterModule,
    GraficasModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class SharedModule { }
