import { Component, Input } from '@angular/core';

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

  @Input('name') name;
  @Input('value') value;

  constructor() {
    console.log('Hello LiquidGaugeComponent Component');
  }

  ngAfterViewInit(){
    console.log('name: ', this.name);
    console.log('value: ', this.value);
  }

}
