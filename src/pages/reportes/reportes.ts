import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { VerReportePage } from '../ver-reporte/ver-reporte';

// Importar servicio api
import { ApiserviceProvider } from '../../providers/apiservice/apiservice';


@Component({
  selector: 'page-reportes',
  templateUrl: 'reportes.html'
})
export class ReportesPage {


  constructor(  public navCtrl: NavController,
                public apiservice: ApiserviceProvider) {    // Construir el servicio api
  }
  
  // Almacen de reportes para visualizarlos
  reports: any[] = [];

  // Obtener Reportes
  ionViewDidLoad(){
    this.apiservice.getReports().subscribe(
      data => {
        this.reports = data['elementos'].reverse();
        console.log( 'API responce: ' + this.reports.length + ' items.' );
      },
      error => {
        this.reports = [ { 'usuario': 'Admin', 'reporte': error['message'] } ]
        console.log(error.message);
      }
    )
  }


  goToVerReporte(params){
  if (!params) params = {};
  this.navCtrl.push(VerReportePage);
  }
}


