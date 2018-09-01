import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



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
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

    this.cards = [
      new Card('0000 0000 0000 1111', 'RAFAEL DE OLIVEIRA', 'master-card', 'Nubank'),
      new Card('0000 0000 0000 2222', 'RAFAEL DE OLIVEIRA', 'visa', 'Santander Gold')
    ]
  }

  public cards: Card[];

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    // this.navCtrl.push(ListPage, {
    //   item: item
    // });
  }
}
