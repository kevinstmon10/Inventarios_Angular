import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataService } from '../../services/data/data.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-ventilador',
  templateUrl: './ventilador.component.html',
  styleUrls: ['./ventilador.component.css'],
})
export class VentiladorComponent implements OnInit {
  ventiladorStatus = false;

  constructor(private _firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    return await this._firestore
      .collection('Sensores')
      .doc('Ventilador')
      .valueChanges()
      .subscribe(async ({ Status }: any) => {
        console.log(Status);
        this.ventiladorStatus = Status;
      });
  }
}
