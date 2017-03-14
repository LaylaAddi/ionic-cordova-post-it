import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Data } from '../../providers/data';
import { AngularFire } from 'angularfire2'
import { Injectable, NgZone } from '@angular/core';
import { Geolocation, Geoposition, BackgroundGeolocation } from 'ionic-native';
import 'rxjs/add/operator/filter';


class Post {
  title: string
  body: string
  latitude: number 
  longitude: number
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


  setGeofence(value: number) {

    Geolocation.getCurrentPosition({
      enableHighAccuracy: true
    }).then((resp) => {
      var longitude = resp.coords.longitude;
      var latitude = resp.coords.latitude;
      var radius = value;

      let fence = {
          id: "myGeofenceID1", 
          latitude:       latitude, 
          longitude:      longitude,
          radius:         radius,  
          transitionType: 2
        }
      
        Geofence.addOrUpdate(fence).then(
          () => this.success = true,
          (err) => this.error = "Failed to add or update the fence."
        );

        Geofence.onTransitionReceived().subscribe(resp => {
          SMS.send('5555555555', 'OMG She lied, leave her now!');
        });

        this.navCtrl.push(ActivePage);


    }).catch((error) => {
      this.error = error;
    });
  }










  submit() {
    // this._data.addPost(this.post) //adds new post to data provider
    this.af.database.list('/posts').push(this.post)
    this.post = new Post() // this clears out old post data
    this.navCtrl.parent.select(0) // returns to feed page
  } 
}
