import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WaitPalmPage } from '../wait-palm/wait-palm';
import { NewPaymentPage } from '../new-payment/new-payment';

@Component({
  selector: 'page-new-palm',
  templateUrl: 'new-palm.html'
})
export class NewPalmPage implements OnInit {

  public selfQRCode: string = 'sure we will win';

  constructor(public navCtrl: NavController) {
  }    
  
  ngOnInit(): void {
    setTimeout(() => {
      this.navCtrl.push(WaitPalmPage, {nextPage: NewPaymentPage})
    }, 2000);
  }



  back() {
    this.navCtrl.pop();
  }
}
