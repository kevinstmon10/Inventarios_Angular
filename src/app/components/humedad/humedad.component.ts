import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataService } from '../../services/data/data.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-humedad',
  templateUrl: './humedad.component.html',
  styleUrls: ['./humedad.component.css'],
})
export class HumedadComponent implements OnInit {
  lineChartLabels: Label[] = [];
  lineChartData: ChartDataSets[] = [];
  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(22,109,234,0.28)',
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
  }

  async getData() {
    return await this._firestore
      .collection('Sensores')
      .doc('Humedad')
      .valueChanges()
      .subscribe(async ({ data }: any) => {
        console.log(data);
        var values: any = [];
        this.lineChartLabels = [];
        data.forEach((d: any) => {
          this.lineChartLabels.push(
            String(new Date(d.date.seconds).toLocaleTimeString('en-US')) // add time to chart
          );
          values.push(d.value);
        });
        this.lineChartData = [
          { data: values, label: 'Humedad' },
        ]; /*add values to chart*/
        this.lastValue = data[data.length - 1].value; //Las value of array
      });
  }
}
