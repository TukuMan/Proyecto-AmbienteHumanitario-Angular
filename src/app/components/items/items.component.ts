import { Component, OnInit } from '@angular/core';
import {Item } from '../../Models/item';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items:Item[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        title: 'Manzana',
        price: 10.5,
        quantity: 4,
        completed:false
      },
      {
        id: 1,
        title: 'Pan',
        price: 4,
        quantity: 8,
        completed:true
      },
      {
        id: 2,
        title: 'Mango',
        price: 8,
        quantity: 1,
        completed:true
      },
    ];
  }

  deleteItem(item:Item){
    this.items = this.items.filter(x => x.id != item.id);
  }

}
