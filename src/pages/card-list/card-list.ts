import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewCardPage } from '../new-card/new-card';



class Card {
  number: string;
  owner: string;
  brand: string;
  description: string;
  constructor(number: string, owner: string, brand: string, description: string) {
    this.number = number;
    this.owner = owner;
    this.brand = brand;
    this.description = description;
  }
}
@Component({
  selector: 'page-card-list',
  templateUrl: 'card-list.html'
})

export class CardListPage {
  public cards: Card[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    

    this.cards = [
      new Card('0000 0000 0000 1111', 'RAFAEL DE OLIVEIRA', 'master-card', 'Nubank'),
      new Card('0000 0000 0000 2222', 'RAFAEL DE OLIVEIRA', 'visa', 'Santander Gold')
    ]
  }


  newCard() {
    this.navCtrl.push(NewCardPage);
  }
}
