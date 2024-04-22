import { Component, Input, OnInit } from '@angular/core';

import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: ``
})
export class Grafica1Component {
  public labels1: string[] = [
    'Pan',
    'Refresco',
    'Tacos',
  ]

  public data1: ChartData<'doughnut'> = {    
    datasets: [
      { data: [10, 15, 40], 
        borderColor:['#6857E6', '#009FEE', '#F02059' ],
        backgroundColor:['#6857E6', '#009FEE', '#F02059' ]
      },      
    ],
  };
}
  