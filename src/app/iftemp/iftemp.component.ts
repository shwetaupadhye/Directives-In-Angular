import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iftemp',
  templateUrl: './iftemp.component.html',
  styleUrls: ['./iftemp.component.css']
})
export class IftempComponent implements OnInit {

  constructor() { }
  show = true;
  hide = false;

  ngOnInit(): void {
  }

}
