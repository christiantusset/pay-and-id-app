import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WaitPalmPage } from '../wait-palm/wait-palm';
import { NewPalmPage } from '../new-palm/new-palm';
import { SelectCardListPage } from '../selectcard-list/selectcard-list';

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

  
    this.navCtrl.push(WaitPalmPage, {nextPage: SelectCardListPage});
  
  }

  newUser() {
    this.navCtrl.push(NewPalmPage, {nextPage: NewPaymentPage});
  }


}
