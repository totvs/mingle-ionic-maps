import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){
    try {
      let latLng = new google.maps.LatLng(-23.6821, -46.876);

      let mapOptions = {
        center: latLng,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    } catch (e) {
      let alert = this.alertCtrl.create({
        title: 'Mingle',
        subTitle: 'Não foi possível carregar o serviço de mapas.',
        buttons: ['OK']
      });
      alert.present();
    }

  }
}
