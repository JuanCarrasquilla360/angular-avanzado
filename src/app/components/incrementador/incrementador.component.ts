import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`
  }
  @Input() progress: number = 20
  @Input() btnClass: string = 'btn btn-primary'
  @Output() valueOutput: EventEmitter<number> = new EventEmitter()

  changeValue(valor: number) {
    if (this.progress >= 100 && valor >= 0) {
      this.progress = 100;
      this.valueOutput.emit(100);
      return
    }
    if (this.progress <= 0 && valor < 0) {
      this.progress = 0;
      this.valueOutput.emit(0);
      return
    }
    this.progress = this.progress + valor;
    this.valueOutput.emit(this.progress);
  }
  onChange(event: number) {
    if (event >= 100) {
      this.progress = 100;
    } else if (event <= 0) {
      this.progress = 0;
    } else this.progress = event
    this.valueOutput.emit(event)
  }
}
