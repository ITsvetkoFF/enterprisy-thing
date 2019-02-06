import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DashboardComponent implements OnInit {

  public widgets: any[] = [
    {name: 'w1'},
    {name: 'w2'},
    {name: 'w3'},
    {name: 'w4'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
