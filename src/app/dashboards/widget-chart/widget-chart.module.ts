import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetChartRoutingModule } from './widget-chart-routing.module';
import {WidgetChartComponent} from './widget-chart.component';

@NgModule({
  declarations: [
    WidgetChartComponent
  ],
  imports: [
    CommonModule,
    WidgetChartRoutingModule
  ]
})
export class WidgetChartModule { }
