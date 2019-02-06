# EnterpisyThing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## What's inside (step by step)?

#### step 1 
`ng new enterprisy-thing --routing`

#### step 2 
`ng generate m dashboards --routing`   
`cd src/app/dashboards`  
`ng g component dashboard -v=ShadowDom`  
`ng g component widget-number -v=ShadowDom`  
`ng g component widget-chart -v=ShadowDom`  
`ng add @angular/cdk`  
add this to dashboard routing module  
```import { DashboardComponent } from './dashboard/dashboard.component';
 
 const routes: Routes = [{
   path: 'dashboard', // Without slashes at the end
   component: DashboardComponent
 }];
 ```
add this to app routing module  
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 ```
 add DashboardsModule to AppModule  
 clean up app.component.html  
 
 #### step 3
 Add some styles  
 add named router-outlet to dashboards.  
 Apply Dragdrop (add module and add directive)  
 
 #### step 4
 To lazy load widgets we need them to be in separate modules.  
 from dashboards folder: `ng generate m widget-chart --routing`  
 add `WidgetChart` component to module and add one simple route to this module  
 do the same for widget-number  
 define bug with lazy loading in outlets: https://github.com/angular/angular/issues/12842#issuecomment-270836368 fix it by adding new component  
 Add this component to ng Module  
   
 lazy loading: `Type WidgetChartComponent is part of the declarations of 2 modules: DashboardsModule and WidgetChartModule! `  
 Just removing it from parent declarations  
  
 holy crap! undefined is not a function. Fight it and enjoy.  
 
 
 #### step 5
Wrap router-outlet to support name binding  
Add dynamic loading of routes to dashboard router config  
Keep in mind that it is easy to mess up modules!  

#### step 6
Let's add this https://bl.ocks.org/mbostock/ad70335eeef6d167bc36fd3c04378048 to chart widget  
`npm install --save d3`  
`npm install --save-dev @types/d3`  
this https://medium.com/netscape/visualizing-data-with-angular-and-d3-209dde784aeb is the nice way, but we have canvas and no time!  

Plan:  
1. copy everything to ngAfterViewInit
2. correctly get reference to canvas from widget
3. change data to be local exported from some ts file.

#### step 7 
Add widget number and explore ViewEncapsulation closer  
Do whatever you vant in a styles of this widget
