import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-wait-palm',
  templateUrl: 'wait-palm.html'
})
export class WaitPalmPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }    
 

  paymentValue: number;
  ngOnInit(): void {
    this.waitForPalmSecure();
  }
  
  waitForPalmSecure() {
    setTimeout(() => {
      this.navCtrl.push(this.navParams.get('nextPage'));
    }, 5000);
  }

}
