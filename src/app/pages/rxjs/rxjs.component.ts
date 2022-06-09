import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription, filter } from 'rxjs';
import { retry, take, map } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {
  subs!: Subscription
  constructor() {
    // this.subs = this.retunObservable()
    // .pipe(
    //   retry(2)
    // )
    // .subscribe(
    //   {
    //     next: (v) => {
    //       console.log(v)
    //     },
    //     error: (v) => {
    //       console.error(v)
    //     },
    //     complete: console.info
    //   }
    // )
    this.subs = this.returnInterval().subscribe(console.log)
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  ngOnInit(): void {

  }

  returnInterval() {
    const interval$ = interval(100).pipe(
      map(val => val + 1),
      filter(val => val % 2 === 1),
      take(10),
    );
    return interval$
  }

  retunObservable(): Observable<number> {
    const obs$ = new Observable<number>(observer => {
      let i = -1
      const interval = setInterval(() => {
        i++
        observer.next(i)
        if (i === 4) {
          clearInterval(interval)
          observer.complete()
        }
        if (i === 2) {
          observer.error('error perro')
        }
      }, 1000)

    })
    return obs$
  }

}
