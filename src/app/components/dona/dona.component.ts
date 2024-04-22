import { Component, Input} from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
 
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',  
})
export class DonaComponent {
 
  @Input() title: string = 'Sin título'
  
  @Input('labels') doughnutChartLabels: string[] = [
    'Label1',
    'Label2',
    'Label3',
  ];
  @Input('datos') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100], 
        borderColor:['#6857E6', '#009FEE', '#F02059' ],
        backgroundColor:['#6857E6', '#009FEE', '#F02059' ]
      },      
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
 
}