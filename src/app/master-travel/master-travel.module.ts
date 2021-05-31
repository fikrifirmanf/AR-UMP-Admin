import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MasterTravelRoutingModule } from "./master-travel-routing.module";
import { TravelTableComponent } from "./travel-table/travel-table.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { TravelAddFormComponent } from "./travel-add-form/travel-add-form.component";
import { FormsModule } from "@angular/forms";
import { TravelEditFormComponent } from './travel-edit-form/travel-edit-form.component';
import { NgSelect2Module } from 'ng-select2';

@NgModule({
  declarations: [TravelTableComponent, TravelAddFormComponent, TravelEditFormComponent],
  imports: [
    NgSelect2Module,
    CommonModule,
    MasterTravelRoutingModule,
    NgxDatatableModule,
    FormsModule,
  ],
})
export class MasterTravelModule {}
