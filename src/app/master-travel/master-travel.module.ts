import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterTravelRoutingModule } from './master-travel-routing.module';
import { TravelTableComponent } from './travel-table/travel-table.component';


@NgModule({
  declarations: [TravelTableComponent],
  imports: [
    CommonModule,
    MasterTravelRoutingModule
  ]
})
export class MasterTravelModule { }
