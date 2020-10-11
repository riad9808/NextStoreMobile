import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsService } from './Services/products.service';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FirebaseService } from './Services/Firebase.service';
import { AnnoncesService } from './Services/annonces.service';
import { StoresService } from './Services/stores.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule
  ,AngularFireModule.initializeApp(environment.firebaseConfig),AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    ProductsService,
    FirebaseService,
    AnnoncesService,
    StoresService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
