import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.html'
})
export class UserProfilePage {

  public userName = 'Christian Tusset';
  public email = 'christiantusset@gmail.com';
  public telefone = '47997061245';
  public senha = '123456';

  constructor(public alertCtrl: AlertController) {
  }

  public save() {
    //this.navCtrl.pop();
    const alert = this.alertCtrl.create({
      title: 'Salvo!',
      subTitle: 'Os dados do usuário foram salvo com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }
}
