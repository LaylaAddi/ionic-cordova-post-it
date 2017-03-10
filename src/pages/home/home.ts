import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
// import { Data } from '../../providers/data';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
//static data...
// const data = [{  
//   title: "post1",
//   body: "hello1",
//   id: 0
// },{
//   title: "post2",
//   body: "hello2",
//   id: 1
// },{
//   title: "post3",
//   body: "hello3",
//   id: 2
// },]

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
// posts: any // static method

  // posts: any = []  
   posts: FirebaseListObservable<any>
  // constructor(public navCtrl: NavController, public _data: Data) {
  constructor(public navCtrl: NavController, public af: AngularFire) {    
    // this.posts = data; //for static data
    // this._data.Posts.subscribe((post) => { this.posts.push(post)}) //treating post as array
    this.posts = af.database.list('/posts') 

  }

}
