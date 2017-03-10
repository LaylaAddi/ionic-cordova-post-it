import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Data } from '../../providers/data';
import { AngularFire } from 'angularfire2'
class Post {
  title: string
  body: string
  id: string

  constructor () {}
}
@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {
post: Post = new Post()
  constructor(public navCtrl: NavController, public af: AngularFire) {}

  submit() {
    // this._data.addPost(this.post) //adds new post to data provider
    this.af.database.list('/posts').push(this.post)
    this.post = new Post() // this clears out old post data
    this.navCtrl.parent.select(0) // returns to feed page
  } 
}
