import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


// Importar servicio api
import { ApiserviceProvider } from '../../providers/apiservice/apiservice';


@Component({
  selector: 'page-nuevo-reporte',
  templateUrl: 'nuevo-reporte.html'
})
export class NuevoReportePage {

  // Inputs para enviar
  public inUsu = '';
  public inDirec = '';
  public inFoto = '';
  public inReporte = '';


  constructor(  public navCtrl: NavController,
                public apiservice: ApiserviceProvider) {    // Construir el servicio api
  }

  sendReport(params){

    if(!params.usuario) { params.usuario = 'Anonimo' }

    this.apiservice.addReport(params).subscribe(
      res => {console.log( 'API responce: ' + JSON.stringify(res) )},
      err => {console.log(err.message)}
    )

    // this.navCtrl.setRoot(ReportesPage);

  }

}
