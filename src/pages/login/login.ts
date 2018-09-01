import { Component } from '@angular/core';
import {  NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthenticationService } from '../../providers/authentication-service/authentication-service';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // public userName: string;
  // public password: string;

  public userName = '000101010101';
  public password = 'adm';
  constructor(public navCtrl: NavController, public navParams: NavParams, public authenticationService: AuthenticationService, private alertController: AlertController) {

  }

  login() {
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

}
