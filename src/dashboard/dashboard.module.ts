import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTablesComponent } from './components/dashboard-tables/dashboard-tables.component';
import { DashboardCardsComponent } from './components/dashboard-cards/dashboard-cards.component';



@NgModule({
  declarations: [
    DashboardTablesComponent,
    DashboardCardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
