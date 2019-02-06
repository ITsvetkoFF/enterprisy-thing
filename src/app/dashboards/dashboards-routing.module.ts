import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import {WidgetChartComponent} from './widget-chart/widget-chart.component';

const routes: Routes = [{
  path: 'dashboard', // DO NOT PUT SLASH AFTER!!
  component: DashboardComponent,
  children: [
    {
      path: 'widget-chart',
      outlet: 'w5',
      component: WidgetChartComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
