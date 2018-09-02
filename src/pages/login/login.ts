import { Component } from '@angular/core';
import {  NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthenticationService } from '../../providers/authentication-service/authentication-service';
import { DashboardPage } from '../dashboard/dashboard';
import { NewPalmPage } from '../new-palm/new-palm';
import { NewPaymentPage } from '../new-payment/new-payment';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // public userName: string;
  // public password: string;

  public userName = 'a';
  public password = 'a';
  constructor(public navCtrl: NavController, public navParams: NavParams, public authenticationService: AuthenticationService, private alertController: AlertController) {

  }

  login() {

    if(!this.userName) {
      this.embeddedMode();
      return;
    }
    this.authenticationService.login(this.userName, this.password)
      .then(success => {        
        // this.navCtrl.push(DashboardPage);
        this.navCtrl.setRoot(DashboardPage);
      })
      .catch(error => {
        this.alertController.create({
          title: 'Ops!',
          subTitle: 'Dados de acesso não reconhecidos.',
          buttons: ['OK']

        }).present();
        console.log(error);
      })
  }

  embeddedMode() {
    this.navCtrl.setRoot(NewPaymentPage);
  }
}
