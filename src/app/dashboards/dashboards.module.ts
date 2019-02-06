import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ProxyRouteComponent} from './proxy-route.component';
import {WidgetNumberModule} from './widget-number/widget-number.module';
import {NamedOutletDirective} from './named-outlet.directive';

@NgModule({
  declarations: [
    DashboardComponent,
    ProxyRouteComponent,
    NamedOutletDirective
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    DragDropModule,
  ]
})
export class DashboardsModule { }
