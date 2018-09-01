import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.html'
})
export class UserProfilePage {

  public userName = 'Christian Tusset';
  public email = 'christiantusset@gmail.com';
  public telefone = '47997061245';
  public senha = '123456';

  constructor(public navCtrl: NavController) {
  }

  salvar() {
    console.log('Salvo com sucesso!');
  }
}
