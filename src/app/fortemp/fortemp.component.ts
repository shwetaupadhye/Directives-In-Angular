import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fortemp',
  templateUrl: './fortemp.component.html',
  styleUrls: ['./fortemp.component.css']
})
export class FortempComponent implements OnInit {

  constructor() { }
  fruits = ['Mango', 'Banana', 'Apple', 'Ber', 'Grapes']
  ngOnInit(): void {
  }

}
