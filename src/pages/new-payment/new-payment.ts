import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WaitPalmPage } from '../wait-palm/wait-palm';

@Component({
  selector: 'page-new-payment',
  templateUrl: 'new-payment.html'
})
export class NewPaymentPage implements OnInit {

  constructor(public navCtrl: NavController) {
  }    
  


  paymentValue: number;
  ngOnInit(): void {
         
  }

  next() {
    this.navCtrl.push(WaitPalmPage);
  
  }


}
