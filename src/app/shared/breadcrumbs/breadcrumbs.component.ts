import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {
  title!: string
  tituloSubs$!: Subscription
  constructor(private router: Router, private route: ActivatedRoute) {
    this.tituloSubs$ = this.getData().subscribe(event => {
      console.log(event)
      this.title = event.title
      document.title = event.title
    })
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe()
  }

  getData() {
    return this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: any) => event.snapshot.firstChild === null),
        map(event => event.snapshot.data)
      )
  }
}
