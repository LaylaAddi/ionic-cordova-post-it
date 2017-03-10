import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PostPage } from '../pages/post/post';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Data } from '../providers/data'; //this gets added only to providers array below
import { AngularFireModule } from 'angularfire2';

 const config = {
    apiKey: "AIzaSyBhrGRNwel5Hr_emTuJTO4VukSjLaIX0Kc",
    authDomain: "feed-90035.firebaseapp.com",
    databaseURL: "https://feed-90035.firebaseio.com",
    storageBucket: "feed-90035.appspot.com",
    messagingSenderId: "576527742470"
  };


@NgModule({
  declarations: [
    MyApp,
    PostPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostPage, 
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Data] 
})
export class AppModule {}
