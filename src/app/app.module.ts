import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TemperaturaComponent } from './components/temperatura/temperatura.component';

import { FormsModule } from '@angular/forms';
import { HumedadComponent } from './components/humedad/humedad.component';
import { TempAguaComponent } from './components/temp-agua/temp-agua.component';
import { VentiladorComponent } from './components/ventilador/ventilador.component';
import { EstatusGeneralComponent } from './components/estatus-general/estatus-general.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { ChartsModule } from 'ng2-charts';

var firebaseConfig = {
  apiKey: 'AIzaSyAMKRqjeY4M7DDsW3jD1ZI-LxPrGdLIkR0',
  authDomain: 'invernadero-1bb85.firebaseapp.com',
  projectId: 'invernadero-1bb85',
  storageBucket: 'invernadero-1bb85.appspot.com',
  messagingSenderId: '263903531088',
  appId: '1:263903531088:web:11d4fcb9d922fb4ff00155',
  measurementId: 'G-Y79DXXWBFK',
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
// firebase.analytics();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TemperaturaComponent,
    HumedadComponent,
    TempAguaComponent,
    VentiladorComponent,
    EstatusGeneralComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
