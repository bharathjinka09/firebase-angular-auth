import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDvWZs_bRH4zZBVPlYtwU875zb6dtlDjuE',
      authDomain: 'fir-angular-auth-4b3f5.firebaseapp.com',
      databaseURL: 'https://fir-angular-auth-4b3f5.firebaseio.com',
      projectId: 'fir-angular-auth-4b3f5',
      storageBucket: 'fir-angular-auth-4b3f5.appspot.com',
      messagingSenderId: '221163256886',
      appId: '1:221163256886:web:c6748021c2539648b8ac97',
    }),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
