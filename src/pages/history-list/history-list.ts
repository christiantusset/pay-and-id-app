import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


class History {
  icon: string;
  type: string;
  name: string;
  value: string;
  note: string;
  constructor(icon: string, type: string, name: string, value: string, note: string) {
    this.icon = icon;
    this.type = type;
    this.name = name;
    this.value = value;
    this.note = note;
  }
}

@Component({
  selector: 'page-history-list',
  templateUrl: 'history-list.html'
})

export class HistoryListPage {

  public historys: History[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.historys = [
      new History ('pizza',
        'Pizzaria',
        'Pizzaria Massa Fina',
        '73,15',
        'Ontem'),
      new History ('cafe',
        'Café',
        'Café São José',
        '23,40',
        'Agosto 28, 2018'),
      new History ( 'md-git-branch',
        'Eletrônicos',
        'Kabum',
        '813,38',
        'Agosto 27, 2018'),
      new History ( 'beer',
        'Cervejaria',
        'Opa Bier',
        '73,15',
        'Agosto 25, 2018'),
      new History ( 'cart',
        'Supermercado',
        'Angeloni Super Ltda',
        '176,15',
        'Agosto 21, 2018')
    ]
  }

}
