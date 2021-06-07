
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-guarded-routes',
  templateUrl: './guarded-routes.component.html',
  styleUrls: ['./guarded-routes.component.scss']
})
export class GuardedRoutesComponent implements OnInit {
  message = 'you do not have permission to access this link';
  action = 'exit';
  msg = 'hellooo';
  constructor(public router: Router, public snackBar: MatSnackBar) {

  }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['/auth/guarded-routes/example']);
    // this.snackBar.open(this.msg, this.action, {
    //   duration: 2000
    // });
  }

  onClicked() {
    this.router.navigate(['/auth/guarded-routes/ex']);
    this.snackBar.open(this.message, this.action, {
      duration: 2000,
    });
  }

  get route() {
    return this.router.routerState.snapshot.url.toString();
  }

}
