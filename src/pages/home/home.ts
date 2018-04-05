import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name01: string = "Something 01";
  value01: number = 0.0;

  name02: string = "Something 02";
  value02: number = 28.7;

  name03: string = "Something 03";
  value03: number = 65.1;

  constructor(public navCtrl: NavController) {

  }

}
