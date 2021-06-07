import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataService } from '../../services/data/data.service';
@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent implements OnInit {

  constructor(
    private _dataService: DataService,
    private _firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    return this._firestore.collection('Sensores').doc('Temperatura').valueChanges().subscribe((data)=>{
      console.log(data);
      
    });
  }

}
