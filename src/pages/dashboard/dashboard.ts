import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Chart } from 'chart.js'
import { DashboardService } from '../../providers/dashboard-service/dashboard-service';
import { CardListPage } from '../card-list/card-list';
import { HistoryListPage } from '../history-list/history-list';

@Component({
    selector: 'page-dashboard',
    templateUrl: 'dashboard.html',
})
export class DashboardPage implements OnInit {

    @ViewChild('transactionsCanvas') transactionsCanvas;

    transactionsChart: any;
    loaded = false;
    constructor(public navCtrl: NavController, public navParams: NavParams, public dashboardService: DashboardService, private loadingCtrl: LoadingController) {


    }

    mock = true;


    getMockResult() {
        this.transactionsChart = new Chart(this.transactionsCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["21/08", "25/08", "27/08", "28/08", "30/08"],
                datasets: [{
                    data: [{ x: 10, y: 73.15 },
                      { x: 20, y: 23.40 },
                      { x: 30, y: 813.38 },
                      { x: 40, y: 73.15 },
                      { x: 10, y: 176.15 }],
                    label: 'Transações',
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

    }

    getRealResult() {
        let loading = this.loadingCtrl.create({
            content: "Carregando...",
        });

        loading.present();


    }
    ngOnInit() {


        if (!this.mock) {
            this.getRealResult();


        } else {
            this.loaded = true;
            this.getMockResult();

        }
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad DashboardPage');
    }

    cardListPage() {
        this.navCtrl.push(CardListPage);
    }

    historyListPage() {
      this.navCtrl.push(HistoryListPage);
    }

}
