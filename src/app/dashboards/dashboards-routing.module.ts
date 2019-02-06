import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProxyRouteComponent } from './proxy-route.component';

const routes: Routes = [{
  path: 'dashboard', // DO NOT PUT SLASH AFTER!!
  component: DashboardComponent,
  children: [
    {
      path: 'widget-chart',
      outlet: 'w5',
      component: ProxyRouteComponent, // https://github.com/angular/angular/issues/12842#issuecomment-270836368
      children: [
        {
          path: '',
          loadChildren: './widget-chart/widget-chart.module#WidgetChartModule',
        },
      ],
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
