import { Injectable } from '@angular/core';
// import { Http } from '@angular/http'; // outside requests to REST 
// import 'rxjs/add/operator/map';
import {ReplaySubject } from 'rxjs' // gets all data all the time not just new

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {
  posts: ReplaySubject<{}> = new ReplaySubject<{}>()
  constructor() {

  }

    get Posts() {
    return this.posts;
  }
  addPost(post) {
    this.posts.next(post)
  }
}
