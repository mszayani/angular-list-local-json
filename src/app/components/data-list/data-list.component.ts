import { Component, OnInit } from '@angular/core';
import cars from '../../../assets/data/cars.json';
@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  title="Angular Cars List";
  public carList: {brand: string, model: string}[] =cars;
  constructor() { }

  ngOnInit(): void {
  }

}
