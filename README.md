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
 
