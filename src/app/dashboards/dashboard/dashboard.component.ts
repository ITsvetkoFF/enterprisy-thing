import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import {ProxyRouteComponent} from '../proxy-route.component';

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
    {name: 'w5'},
  ];

  constructor(public router: Router) { }

  ngOnInit() {
  }

  loadNumberRoute() {
    const dashboardChildren = this.router.config[0].children;
    console.log('Router Configuration before: ');
    console.log(JSON.stringify(dashboardChildren, null, 2));
    if (dashboardChildren) {
      dashboardChildren.push(
        {
          path: 'widget-number',
          outlet: 'w2',
          component: ProxyRouteComponent,
          children: [
            {
              path: '',
              loadChildren: './widget-number/widget-number.module#WidgetNumberModule',
            },
          ],
        }
      );
    }
    console.log('Router Configuration after: ');
    console.log(JSON.stringify(dashboardChildren, null, 2));
  }
}
