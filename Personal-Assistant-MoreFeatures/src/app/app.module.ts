import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlannerComponent } from './planner/planner.component';

import { HealthComponent } from './health/health.component';
import { PrioritizeComponent } from './prioritize/prioritize.component';
import { NgxSmoothDnDModule } from 'ngx-smooth-dnd';
import { DecisionComponent } from './decision/decision.component'
import { CheckerComponent } from './health/checker/checker.component';




@NgModule({
  declarations: [
    AppComponent,
    PlannerComponent,
    HealthComponent,
    PrioritizeComponent,
    CheckerComponent,
    DecisionComponent
  
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ClarityModule,
    FormsModule,
    NgxSmoothDnDModule,
    RouterModule.forRoot([
      {
         path: 'planner',
         component: PlannerComponent
      },
      {
        path: 'health',
        component: HealthComponent
     },
     {
      path: 'prioritize',
      component: PrioritizeComponent
     },

     {
      path: 'checker',
      component: CheckerComponent
     },
     {
      path: 'decision',
      component: DecisionComponent
     }
   ])
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CheckerComponent, AppComponent, HealthComponent]
})
export class AppModule { }
