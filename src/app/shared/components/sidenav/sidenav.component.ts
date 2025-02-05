import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

 public  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
        {
          label: 'Graficos',
          icon: 'pi pi-desktop',
          items:[
            {
              label: 'Graficas',
              icon: 'pi pi-align-left',
              items: [
                {
                  label: 'Vertical Bar',
                  routerLink: './vertical-bar',
                },
                {
                  label: 'Polar Area',
                  routerLink: 'polar-area',
                },
                {
                  label: 'Radar',
                  routerLink: 'radar',
                },

              ]
            },
            {
              label: 'Filtros',
              icon: 'pi pi-filter',
              routerLink: '/filtros'
            },

          ]
        },
        {
          label: 'Formulario',
          icon: 'pi pi-cog',
          items:[
            {
              label: 'User',
              icon: 'pi pi-user',
              routerLink: '/formulario'
            }
          ]
        }
      ];
  }
}
