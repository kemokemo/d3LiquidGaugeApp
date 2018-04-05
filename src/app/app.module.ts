import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NgxD3LiquidFillGaugeComponent } from '../components/ngx-d3-liquid-fill-gauge/ngx-d3-liquid-fill-gauge.component';
import { LiquidGaugeComponent } from '../components/liquid-gauge/liquid-gauge';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NgxD3LiquidFillGaugeComponent,
    LiquidGaugeComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
