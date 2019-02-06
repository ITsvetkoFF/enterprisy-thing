import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ProxyRouteComponent} from './proxy-route.component';
import {WidgetChartModule} from './widget-chart/widget-chart.module';
import {WidgetNumberModule} from './widget-number/widget-number.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ProxyRouteComponent
  ],
  imports: [
    CommonModule,
    WidgetNumberModule,
    DashboardsRoutingModule,
    DragDropModule,
  ]
})
export class DashboardsModule { }
