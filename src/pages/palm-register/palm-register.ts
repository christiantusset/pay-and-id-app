import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@Component({
  selector: 'page-palm-register',
  templateUrl: 'palm-register.html'
})
export class PalmRegisterPage implements OnInit {

  constructor(public navCtrl: NavController, private qrScanner: QRScanner) {

  }

  ngOnInit(): void {
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        // camera permission was granted
        console.error("alow");

        // start scanning
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something', text);

          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
        });
        this.qrScanner.show();
      } else if (status.denied) {
        // camera permission was permanently denied
        // you must use QRScanner.openSettings() method to guide the user to the settings page
        // then they can grant the permission from there
        console.error('permanent denied');
      } else {
        console.error('temporary denied');
        // permission was denied, but not permanently. You can ask for permission again at a later time.
      }
  })
  .catch((e: any) => console.log('Error is', e));
    
  }

}
