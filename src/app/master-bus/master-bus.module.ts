import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MasterBusRoutingModule } from "./master-bus-routing.module";
import { BusTableComponent } from "./bus-table/bus-table.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { BusEditFormComponent } from "./bus-edit-form/bus-edit-form.component";
import { FormsModule } from "@angular/forms";
import { BusAddFormComponent } from './bus-add-form/bus-add-form.component';

@NgModule({
  declarations: [BusTableComponent, BusEditFormComponent, BusAddFormComponent],
  imports: [
    CommonModule,
    MasterBusRoutingModule,
    NgxDatatableModule,
    FormsModule,
  ],
})
export class MasterBusModule {}
