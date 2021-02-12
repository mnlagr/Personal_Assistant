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



@NgModule({
  declarations: [
    AppComponent,
    PlannerComponent,
    HealthComponent,
    PrioritizeComponent,
    
    
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
     }
   ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
