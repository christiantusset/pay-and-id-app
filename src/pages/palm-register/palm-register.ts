import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-palm-register',
  templateUrl: 'palm-register.html'
})
export class PalmRegisterPage implements OnInit {
  options :BarcodeScannerOptions;

  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner) {
  }    
  
  scanData : {};

  isPalmRegistered = false;

  waitingPalmSecure = false;

  ngOnInit(): void {
         
  }

  scan() {
    this.options = {
      prompt : "Leia o QR Code no dispositivo PAY&ID"
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {

        console.log(barcodeData);
        this.scanData = barcodeData;
        this.waitingPalmSecure = true;
        this.waitForPalmSecure();
        
    }, (err) => {
        console.log(err);
        if(err === 'cordova_not_available') {
          this.waitingPalmSecure = true;
          this.waitForPalmSecure();
        }
    });  
  }
  
  waitForPalmSecure() {
    setTimeout(() => {
      this.isPalmRegistered = true;
      this.waitingPalmSecure = true;
    }, 7000);
  }

}
