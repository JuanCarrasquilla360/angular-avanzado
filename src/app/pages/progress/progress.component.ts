import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [
    './progress.component.css'
  ]
})
export class ProgressComponent {
  progress1 = 10
  progress2 = 30

  get getProgress1(){
    return `${this.progress1}%`
  }
  get getProgress2(){
    return `${this.progress2}%`
  }
}
