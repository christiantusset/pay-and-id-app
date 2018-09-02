import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.html'
})
export class UserProfilePage {

  public userName = 'Fulano de Tal';
  public email = 'payandid@gmail.com';
  public telefone = '(47) 1111-1111';
  public senha = '99999';

  constructor(public alertCtrl: AlertController) {
  }

  public save() {
    const alert = this.alertCtrl.create({
      title: 'Salvo!',
      subTitle: 'Os dados do usuário foram salvo com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }
}
