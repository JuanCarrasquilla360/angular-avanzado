import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  data = {
    labels: ['label4', 'label5', 'label6'],
    datasets: [
      { data: [ 350, 450, 100 ], backgroundColor:['#9E120E','#FF5800','#FFB414']  },
    ]
  };

}
