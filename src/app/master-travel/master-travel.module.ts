import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MasterTravelRoutingModule } from "./master-travel-routing.module";
import { TravelTableComponent } from "./travel-table/travel-table.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { TravelAddFormComponent } from "./travel-add-form/travel-add-form.component";
import { FormsModule } from "@angular/forms";
import { TravelEditFormComponent } from './travel-edit-form/travel-edit-form.component';
import { BiroTravelTableComponent } from './biro-travel-table/biro-travel-table.component';

@NgModule({
  declarations: [TravelTableComponent, TravelAddFormComponent, TravelEditFormComponent, BiroTravelTableComponent],
  imports: [
    CommonModule,
    MasterTravelRoutingModule,
    NgxDatatableModule,
    FormsModule,
  ],
})
export class MasterTravelModule {}
