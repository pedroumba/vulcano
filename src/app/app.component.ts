import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AyudaPage } from '../pages/ayuda/ayuda';
import { EntidadesPage } from '../pages/entidades/entidades';
import { MapasPage } from '../pages/mapas/mapas';
import { NuevoReportePage } from '../pages/nuevo-reporte/nuevo-reporte';


import { ReportesPage } from '../pages/reportes/reportes';



@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = ReportesPage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // statusBar.styleDefault();
      // splashScreen.hide();
    });
  }
  goToAyuda(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AyudaPage);
    // this.navCtrl.push(AyudaPage);
  }
  goToReportes(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ReportesPage);
  }
  goToEntidades(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EntidadesPage);
    // this.navCtrl.push(EntidadesPage);
  }
  goToMapas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MapasPage);
    // this.navCtrl.push(MapasPage);
  }
  goToNuevoReporte(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NuevoReportePage);
  }
}
