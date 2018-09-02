import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-history-list',
  templateUrl: 'history-list.html'
})

export class HistoryListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  historyReturn() {
    this.navCtrl.pop();
  }
}
