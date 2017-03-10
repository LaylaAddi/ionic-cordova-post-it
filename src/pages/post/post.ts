import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController) {}

  submit() {
    this.navCtrl.parent.select(0) 
  } 
}
