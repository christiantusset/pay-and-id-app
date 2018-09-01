import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Chart } from 'chart.js'
import { DashboardService } from '../../providers/dashboard-service/dashboard-service';
import { CardListPage } from '../card-list/card-list';

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
                labels: ["05/2018", "06/2018", "07/2018", "08/2018"],
                datasets: [{
                    data: [{ x: 10, y: 80 }, { x: 20, y: 110 }, { x: 30, y: 60 }, { x: 40, y: 80 }],
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
}
