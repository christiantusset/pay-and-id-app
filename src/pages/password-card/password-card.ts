import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SelectCardListPage } from '../selectcard-list/selectcard-list';

@Component({
  selector: 'password-card',
  templateUrl: 'password-card.html'
})

export class PasswordCardPage {

  public senha;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  confirmPassword() {
    this.navCtrl.push(SelectCardListPage);
  }

  cancelPassword() {
    this.navCtrl.pop();
  }
}
