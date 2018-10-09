import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MapasPage } from '../pages/mapas/mapas';
import { ReportesPage } from '../pages/reportes/reportes';
import { EntidadesPage } from '../pages/entidades/entidades';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { NuevoReportePage } from '../pages/nuevo-reporte/nuevo-reporte';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { VerReportePage } from '../pages/ver-reporte/ver-reporte';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Import for service/provider
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceProvider } from '../providers/apiservice/apiservice';


@NgModule({
  declarations: [
    MyApp,
    MapasPage,
    ReportesPage,
    EntidadesPage,
    TabsControllerPage,
    NuevoReportePage,
    AyudaPage,
    VerReportePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapasPage,
    ReportesPage,
    EntidadesPage,
    TabsControllerPage,
    NuevoReportePage,
    AyudaPage,
    VerReportePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiserviceProvider
  ]
})
export class AppModule {}