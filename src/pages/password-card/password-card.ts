import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewPaymentPage } from '../new-payment/new-payment';


@Component({
  selector: 'page-password-card',
  templateUrl: 'password-card.html'
})

export class PasswordCardPage {

  public senha;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  password() {
    this.navCtrl.push(NewPaymentPage);
  }
}
