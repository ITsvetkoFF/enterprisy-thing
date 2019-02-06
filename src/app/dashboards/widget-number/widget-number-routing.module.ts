import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WidgetNumberComponent} from './widget-number.component';

const routes: Routes = [{
  path: '',
  component: WidgetNumberComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetNumberRoutingModule { }
