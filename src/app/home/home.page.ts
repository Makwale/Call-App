import { Component } from '@angular/core';

import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private callNumber: CallNumber) {}

  call(){
    this.callNumber.callNumber("0798374033", true).then(res => alert('Launched dialer!' + res))
  .catch(err => alert('Error launching dialer' + err.message));
  }

}
