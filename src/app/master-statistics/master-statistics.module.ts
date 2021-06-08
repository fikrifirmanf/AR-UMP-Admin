import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterStatisticsRoutingModule } from './master-statistics-routing.module';
import { VisitorStatisticsTableComponent } from './visitor-statistics-table/visitor-statistics-table.component';


@NgModule({
  declarations: [VisitorStatisticsTableComponent],
  imports: [
    CommonModule,
    MasterStatisticsRoutingModule
  ]
})
export class MasterStatisticsModule { }
