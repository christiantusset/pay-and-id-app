import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { PalmRegisterPage } from '../pages/palm-register/palm-register';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AuthenticatedRequest } from '../providers/authenticated-request/authenticated-request';
import { AuthenticationService } from '../providers/authentication-service/authentication-service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { DashboardService } from '../providers/dashboard-service/dashboard-service';
import { CardListPage } from '../pages/card-list/card-list';
import { HistoryListPage } from '../pages/history-list/history-list';
import { NewCardPage } from '../pages/new-card/new-card';
import {UserProfilePage} from "../pages/user-profile/user-profile";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NewPaymentPage } from '../pages/new-payment/new-payment';
import { WaitPalmPage } from '../pages/wait-palm/wait-palm';
import { NewPalmPage } from '../pages/new-palm/new-palm';

@NgModule({
  declarations: [
    MyApp,
    PalmRegisterPage,
    ListPage,
    LoginPage,
    DashboardPage,
    CardListPage,
    HistoryListPage,
    NewCardPage,
    UserProfilePage,
    NewPaymentPage,
    WaitPalmPage,
    NewPalmPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PalmRegisterPage,
    ListPage,
    LoginPage,
    DashboardPage,
    CardListPage,
    HistoryListPage,
    NewCardPage,
    UserProfilePage,
    NewPaymentPage,
    WaitPalmPage,
    NewPalmPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticatedRequest,
    AuthenticationService,
    DashboardService,
    BarcodeScanner
  ]
})
export class AppModule {}
