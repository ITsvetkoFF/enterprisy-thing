import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetChartComponent } from './widget-chart/widget-chart.component';
import { WidgetNumberComponent } from './widget-number/widget-number.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [DashboardComponent, WidgetChartComponent, WidgetNumberComponent],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    DragDropModule
  ]
})
export class DashboardsModule { }
