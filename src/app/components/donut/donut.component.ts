import { AfterViewInit, Component, Input } from '@angular/core';
import { ChartData, ChartType, } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent {

  @Input() title: string = 'Sin Titulo';
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: ['label1', 'label2', 'label3'],
    datasets: [
      { data: [ 350, 450, 100 ], backgroundColor:['#9E120E','#FF5800','#FFB414']  },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

}
