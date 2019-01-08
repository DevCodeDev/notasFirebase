import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NotasService } from '../services/notes.services';
import { DetailPage } from '../pages/detail/detail';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAo7TecTqlIWX-wl0KOEHaa2HhVbW10CzU",
  authDomain: "notas-410f6.firebaseapp.com",
  databaseURL: "https://notas-410f6.firebaseio.com",
  projectId: "notas-410f6",
  storageBucket: "notas-410f6.appspot.com",
  messagingSenderId: "914225010964"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NotasService
  ]
})
export class AppModule {}
