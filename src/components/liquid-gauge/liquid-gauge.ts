import { Component } from '@angular/core';

/**
 * Generated class for the LiquidGaugeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'liquid-gauge',
  templateUrl: 'liquid-gauge.html'
})
export class LiquidGaugeComponent {

  text: string;

  constructor() {
    console.log('Hello LiquidGaugeComponent Component');
    this.text = 'Hello World';
  }

}
