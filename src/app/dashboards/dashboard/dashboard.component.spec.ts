import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { NamedOutletDirective } from '../named-outlet.directive';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { ClassField } from '@angular/compiler';

const routes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent,
  children: []
}];

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)], // This was not here automatically
      declarations: [ 
        DashboardComponent, 
        NamedOutletDirective // This was not here automatically
      ]
    })
    .compileComponents();
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to add new route to config calling loadNumberRoute', () => {
    expect(JSON.stringify(router.config)).toEqual(`[{"path":"dashboard","children":[]}]`);
    component.loadNumberRoute();
    expect(JSON.stringify(router.config)).toEqual(`[{"path":"dashboard","children":[{"path":"widget-number","outlet":"w2","children":[{"path":"","loadChildren":"./widget-number/widget-number.module#WidgetNumberModule"}]}]}]`);
  });

/**
 * Why tests are useful? Somewhere at this moment when you'll be fighting with low branch coverage:
 *   Branches     : 25% ( 2/8 )
 * you'll try to mock routes and realize that there are 2 problems:
 * 1. loadNumberRoute is a very bad code that should be refactored first (What if routing changes?)
 * 2. It makes sense to create a separate test suite with exported mock routes array and use it here.
 */

  it('should not add new route to config that does not have children calling loadNumberRoute', () => {
    router.config[0] = {
      path: 'dashboard',
      component: DashboardComponent
    };
    expect(JSON.stringify(router.config)).toEqual(`[{"path":"dashboard"}]`);
    component.loadNumberRoute();
    expect(JSON.stringify(router.config)).toEqual(`[{"path":"dashboard"}]`);
  });
});
