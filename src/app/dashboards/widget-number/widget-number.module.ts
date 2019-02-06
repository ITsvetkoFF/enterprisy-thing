import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetNumberRoutingModule } from './widget-number-routing.module';
import {WidgetNumberComponent} from './widget-number.component';

@NgModule({
  declarations: [
    WidgetNumberComponent
  ],
  imports: [
    CommonModule,
    WidgetNumberRoutingModule
  ]
})
export class WidgetNumberModule { }
