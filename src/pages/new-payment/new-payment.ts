import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WaitPalmPage } from '../wait-palm/wait-palm';
import { NewPalmPage } from '../new-palm/new-palm';

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

  newUser() {
    this.navCtrl.pop();
    this.navCtrl.push(NewPalmPage, {nextPage: NewPaymentPage});
  }


}
