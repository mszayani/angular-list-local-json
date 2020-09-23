import { Component, OnInit } from '@angular/core';
import cars from '../../../assets/data/cars.json';
@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  title="Angular 10 List Json File Data | Cars List Component";
  public carList: {brand: string, model: string}[] =cars;
  constructor() { }

  ngOnInit(): void {
  }

}
