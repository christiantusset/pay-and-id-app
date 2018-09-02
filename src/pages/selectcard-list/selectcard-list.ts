import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PasswordCardPage } from '../password-card/password-card';
import Card from '../../app/card';


@Component({
  selector: 'page-selectcard-list',
  templateUrl: 'selectcard-list.html'
})

export class SelectCardListPage {
  public cards: Card[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.cards = [
      new Card('xxxx xxxx xxxx 1111', 'RAFAEL DE OLIVEIRA', 'master-card', 'Nubank'),
      new Card('xxxx xxxx xxxx 2222', 'RAFAEL DE OLIVEIRA', 'visa', 'Santander Gold')
    ]
  }

  selectCard() {
    this.navCtrl.push(PasswordCardPage);
  }
}
