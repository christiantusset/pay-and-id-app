import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-wait-palm',
  templateUrl: 'wait-palm.html'
})
export class WaitPalmPage implements OnInit {

  constructor(public navCtrl: NavController) {
  }    
  
  scanData : {};

  isPalmRegistered = false;

  waitingPalmSecure = false;

  paymentValue: number;
  ngOnInit(): void {
         
  }

  scan() {
 
  
  }
  
  waitForPalmSecure() {
    setTimeout(() => {
      this.isPalmRegistered = true;
      this.waitingPalmSecure = true;
    }, 7000);
  }

}
