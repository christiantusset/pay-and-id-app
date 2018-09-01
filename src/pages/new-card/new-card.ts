import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-new-card',
  templateUrl: 'new-card.html'
})

export class NewCardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }


  public save() {
    this.navCtrl.pop();
  }
}
