import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polar-area',
  templateUrl: './polar-area.component.html',
  styleUrls: ['./polar-area.component.css']
})
export class PolarAreaComponent implements OnInit{

  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.data = {
          datasets: [
              {
                  data: [11, 16, 7, 3, 14],
                  backgroundColor: [
                      documentStyle.getPropertyValue('--red-500'),
                      documentStyle.getPropertyValue('--green-500'),
                      documentStyle.getPropertyValue('--yellow-500'),
                      documentStyle.getPropertyValue('--bluegray-500'),
                      documentStyle.getPropertyValue('--blue-500')
                  ],
                  label: 'My dataset'
              }
          ],
          labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
      };

      this.options = {
        responsive: true, // Permite que la gráfica sea responsiva
        //maintainAspectRatio: false, // Permite modificar el tamaño
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              r: {
                  grid: {
                      color: surfaceBorder
                  }
              }
          }
      };
  }

}
