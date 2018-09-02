import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WaitPalmPage } from '../wait-palm/wait-palm';

@Component({
  selector: 'page-new-palm',
  templateUrl: 'new-palm.html'
})
export class NewPalmPage implements OnInit {

  constructor(public navCtrl: NavController) {
  }    
  
  ngOnInit(): void {
         
  }

  next() {
    this.navCtrl.push(WaitPalmPage);
  
  }

  back() {
    this.navCtrl.pop();
  }
}
