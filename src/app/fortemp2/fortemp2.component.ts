import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fortemp2',
  templateUrl: './fortemp2.component.html',
  styleUrls: ['./fortemp2.component.css']
})
export class Fortemp2Component implements OnInit {

  constructor() { }
  user = [
    { name: 'shweta', email: 'shweta@gmail.com' },
    { name: 'Rashi', email: 'rashi@gmail.com' },
    { name: 'Ankita', email: 'ankita@gmail.com' },
    { name: 'Riya', email: 'riya@gmil.com' }
  ]

  ngOnInit(): void {
  }

}
