import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsers().then
  }

  getUsers() {
    const promesa = new Promise(resolve => {
      fetch('http://reqres.in/api/users')
        .then(res => res.json() )
        .then(body => { resolve(body.data) })
    })
    return promesa
  }

}
