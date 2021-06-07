import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataService } from '../../services/data/data.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-temp-agua',
  templateUrl: './temp-agua.component.html',
  styleUrls: ['./temp-agua.component.css'],
})
export class TempAguaComponent implements OnInit {
  lineChartLabels: Label[] = [];
  lineChartData: ChartDataSets[] = [];
  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  public lineChartType: any = 'line';
  public lastValue;
  constructor(
    private _dataService: DataService,
    private _firestore: AngularFirestore
  ) {
    this.lastValue = 0;
  }

  ngOnInit(): void {
    this.getData();
    this.getPumpData();
  }

  async getData() {
    return await this._firestore
      .collection('Sensores')
      .doc('Temperatura_Agua')
      .valueChanges()
      .subscribe(async ({ data }: any) => {
        console.log(data);
        var values: any = [];
        this.lineChartLabels = [];
        data.forEach((d: any) => {
          this.lineChartLabels.push(
            String(new Date(d.date.seconds).toLocaleTimeString('en-US'))
          );
          values.push(d.value);
        });
        this.lineChartData = [{ data: values, label: 'Temperatura Agua' }];
        this.lastValue = data[data.length - 1].value; //Las value of array
      });
  }

  bombaStatus = false;
  async getPumpData() {
    return await this._firestore
      .collection('Sensores')
      .doc('Bomba')
      .valueChanges()
      .subscribe(async ({ status }: any) => {
        console.log(status);
        this.bombaStatus = status;
      });
  }
}
