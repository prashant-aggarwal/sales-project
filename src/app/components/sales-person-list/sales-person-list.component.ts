import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})

export class SalesPersonListComponent implements OnInit {
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Mike", "Lack", "mikelach@sample.com", 100),
    new SalesPerson("Moose", "Jordan", "moosey@sample.com", 1000),
    new SalesPerson("Michael", "Schumakar", "micky@sample.com", 10000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
