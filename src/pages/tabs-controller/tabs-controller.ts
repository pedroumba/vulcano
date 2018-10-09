import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NuevoReportePage } from '../nuevo-reporte/nuevo-reporte';
import { ReportesPage } from '../reportes/reportes';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  constructor(public navCtrl: NavController) {
  }
  goToNuevoReporte(params){
    if (!params) params = {};
    this.navCtrl.push(NuevoReportePage);
  }
  goToReportes(params){
    if (!params) params = {};
    this.navCtrl.push(ReportesPage);
  }
}
